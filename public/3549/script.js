document.addEventListener('DOMContentLoaded', () => {

  // --- 1. PROGRESS BAR ---
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
  });


  // --- 2. ACCORDION (Fricciones Pedagógicas) ---
  const frictionsData = [
    {
      title: "La genealogía incompleta",
      text: "El paper traza un linaje noble: Rousseau → Pestalozzi → Dewey → Freire → NEM. Pero se salta medio siglo de historia y fracasos de la Escuela Activa en México. Sugiere una coherencia que no existe."
    },
    {
      title: "El abismo del 'libro sin recetas'",
      text: "La SEP distribuye manuales invocando la autonomía de Freire. Pero Freire escribía desde la trinchera comunitaria, mientras que la SEP lo decreta desde un escritorio federal. ¿Se puede normar la emancipación?"
    },
    {
      title: "Constructivismo vs. Estandarización",
      text: "Se exige evaluar mediante proyectos libres y formativos, pero el estado mantiene exámenes estandarizados rígidos para medir la 'calidad'. La filosofía choca de frente con la métrica."
    },
    {
      title: "¿Disrupción tecnológica?",
      text: "Usar Pizarras Digitales o Kahoot para dictar los mismos contenidos de siempre no es innovación. Si la tecnología no altera el modelo transmisivo, es puro maquillaje metodológico."
    }
  ];

  const accordionContainer = document.getElementById('frictiones-accordion');
  
  frictionsData.forEach((item, index) => {
    const accItem = document.createElement('div');
    accItem.className = 'accordion-item';
    
    accItem.innerHTML = `
      <div class="accordion-header">
        <span>0${index + 1}. ${item.title}</span>
        <span>+</span>
      </div>
      <div class="accordion-content">
        <p>${item.text}</p>
      </div>
    `;

    const header = accItem.querySelector('.accordion-header');
    header.addEventListener('click', () => {
      const isActive = accItem.classList.contains('active');
      // close all
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
      // open clicked
      if(!isActive) accItem.classList.add('active');
    });

    accordionContainer.appendChild(accItem);
  });


  // --- 3. THE TIMELINE DRAG & DROP GAME (LÚDICA) ---
  const draggables = document.querySelectorAll('.drag-item');
  const dropZones = document.querySelectorAll('.drop-zone');
  const feedback = document.getElementById('timeline-feedback');
  let correctMatches = 0;

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
    });
  });

  dropZones.forEach(zone => {
    zone.addEventListener('dragover', e => {
      e.preventDefault();
      zone.classList.add('hovered');
    });

    zone.addEventListener('dragleave', () => {
      zone.classList.remove('hovered');
    });

    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('hovered');
      
      const draggable = document.querySelector('.dragging');
      if(!draggable) return;

      const expectedAuthor = zone.getAttribute('data-author');
      const itemAuthor = draggable.getAttribute('data-author');

      if (expectedAuthor === itemAuthor) {
        // Correct match!
        const target = zone.querySelector('.drop-target');
        target.innerHTML = '';
        const clone = draggable.cloneNode(true);
        clone.draggable = false;
        target.appendChild(clone);
        
        zone.classList.add('filled');
        draggable.classList.add('hidden'); // Hide original
        correctMatches++;

        if (correctMatches === 4) {
          feedback.classList.remove('hidden');
        }
      } else {
        // Wrong match visual feedback
        zone.classList.add('error');
        setTimeout(() => zone.classList.remove('error'), 500);
        // We could use an alert, but let's keep it fluid: the piece just snaps back.
      }
    });
  });

  // Adding touch support for mobile (basic mapping)
  // In a real prod environment we'd use better polyfills, but let's click-to-move for simplicity on mobile
  if (window.innerWidth < 800) {
    const instructions = document.querySelector('.instructions');
    if (instructions) instructions.textContent = "Toca un concepto y luego toca su verdadero año de origen:";
    
    let selectedItem = null;
    
    draggables.forEach(draggable => {
      draggable.addEventListener('click', () => {
        draggables.forEach(d => d.style.borderColor = 'var(--bg-earth)');
        selectedItem = draggable;
        draggable.style.borderColor = 'var(--accent)';
      });
    });

    dropZones.forEach(zone => {
      zone.addEventListener('click', () => {
        if(!selectedItem) return;
        
        const expectedAuthor = zone.getAttribute('data-author');
        const itemAuthor = selectedItem.getAttribute('data-author');

        if (expectedAuthor === itemAuthor) {
          const target = zone.querySelector('.drop-target');
          target.innerHTML = '';
          const clone = selectedItem.cloneNode(true);
          target.appendChild(clone);
          
          zone.classList.add('filled');
          selectedItem.classList.add('hidden');
          selectedItem = null;
          correctMatches++;

          if (correctMatches === 4) feedback.classList.remove('hidden');
        } else {
           selectedItem.style.borderColor = 'red';
           setTimeout(() => { if(selectedItem) selectedItem.style.borderColor = 'var(--accent)'; }, 500);
        }
      });
    });
  }

});
