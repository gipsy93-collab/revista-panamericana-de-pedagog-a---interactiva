export interface PodcastEpisode {
  id: string;
  title: string;
  author: string;
  description: string;
  audioUrl: string;
  duration?: string;
  category: string;
  tags: string[];
}

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: 'p1',
    title: 'Cine para aprender literatura en clases virtuales',
    author: 'López-Martínez',
    description: 'Explora el uso del cine como mediador pedagógico para la enseñanza de la literatura, superando la brecha entre la cultura escolar y las prácticas digitales.',
    audioUrl: '/archivos/PODCAST/López-Martínez-Cine_para_aprender_literatura_en_clases_virtuale.m4a',
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800',
    category: 'Innovación Educativa',
    tags: ['Cine', 'Literatura', 'Humanidades']
  },
  {
    id: 'p2',
    title: 'La autoeficacia previene la deserción universitaria',
    author: 'Euan-Catzin & Castro',
    description: 'Estudio piloto sobre la validación de escalas para medir la intención de deserción y el impacto de la motivación académica en estudiantes de Yucatán.',
    audioUrl: '/archivos/PODCAST/Euan-Catzin_Castro-La_autoeficacia_previene_la_deserción_univer.m4a',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800',
    category: 'Psicometría',
    tags: ['Deserción', 'Universidad', 'Autoeficacia']
  },
  {
    id: 'p3',
    title: 'La IA sacude las facultades de derecho',
    author: 'Prince Galbán',
    description: 'Análisis de la formación jurídica frente a la integración de la inteligencia artificial y la urgencia de una transformación educativa interdisciplinaria.',
    audioUrl: '/archivos/PODCAST/Prince_Galbán_La_IA_sacude_las_facultades_de_derecho.m4a',
    imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae1bd23?q=80&w=800',
    category: 'IA & Derecho',
    tags: ['IA', 'Derecho', 'Futuro']
  },
  {
    id: 'p4',
    title: 'Ignorar memes frena el ciberacoso universitario',
    author: 'Vallejos-Parás',
    description: 'Dinámicas del ciberacoso post-pandemia y modelos predictivos para reducir la agresión mediante el control de la provocación digital.',
    audioUrl: '/archivos/PODCAST/Vallejos-Parás-_Ignorar_memes_frena_el_ciberacoso_universitario.m4a',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800',
    category: 'Ciberseguridad',
    tags: ['Memes', 'Ciberacoso', 'Universidad']
  },
  {
    id: 'p5',
    title: 'Estudiar en la ciudad más violenta',
    author: 'Ramos-Ramírez',
    description: 'Percepción de la cultura de paz en entornos académicos condicionados por la inseguridad social y la resiliencia ciudadana ante la criminalidad.',
    audioUrl: '/archivos/PODCAST/Ramos-Ramírez_-Estudiar_en_la_ciudad_más_violenta.m4a',
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800',
    category: 'Cultura de Paz',
    tags: ['Paz', 'Violencia', 'Sociedad']
  },
  {
    id: 'p6',
    title: 'Drogas en escuelas: entre castigo y contención',
    author: 'Inostroza-Fuentes',
    description: 'El rol docente frente al microtráfico en escuelas de Chile y la búsqueda de un enfoque de cuidado que supere las respuestas punitivas.',
    audioUrl: '/archivos/PODCAST/Inostroza-Fuentes-Drogas_en_escuelas_entre_castigo_y_contención.m4a',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800',
    category: 'Protección de Derechos',
    tags: ['Escuela', 'Docencia', 'Drogas']
  },
  {
    id: 'p7',
    title: 'Paisajes de aprendizaje que enganchan estudiantes',
    author: 'Saborio-Taylor',
    description: 'El uso de itinerarios pedagógicos dinámicos en Genially para potenciar la motivación y autorregulación en entornos virtuales.',
    audioUrl: '/archivos/PODCAST/Saborio-TaylorPaisajes_de_aprendizaje_que_enganchan_estudiantes.m4a',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800',
    category: 'Itinerarios Digitales',
    tags: ['Gamificación', 'Genially', 'Postgrado']
  },
  {
    id: 'p8',
    title: 'La trampa de las clases híbridas simultáneas',
    author: 'Roldán Morales',
    description: 'Desafíos de la interacción genuina y obstáculos técnicos en la implementación de modelos híbridos en universidades de Colombia.',
    audioUrl: '/archivos/PODCAST/Roldán_Morales_La_trampa_de_las_clases_híbridas_simultáneas.m4a',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800',
    category: 'Educación Híbrida',
    tags: ['Híbrido', 'Tecnología', 'Pedagogía']
  },
  {
    id: 'p9',
    title: 'Tecnología y vínculos en la vejez',
    author: 'Hernández-Silvera & Pecora',
    description: 'Cómo el uso de smartphones reduce el aislamiento y fortalece la reserva cognitiva e independencia en adultos mayores.',
    audioUrl: '/archivos/PODCAST/Hernández-Silvera_PecoraTecnología_y_vínculos_en_la_vejez.m4a',
    imageUrl: 'https://images.unsplash.com/photo-1533227268408-a774695d9ae9?q=80&w=800',
    category: 'Gerontología Digital',
    tags: ['Adultos Mayores', 'TIC', 'Inclusión']
  },
  {
    id: 'p10',
    title: 'Celulares y problemas reales transforman el campo',
    author: 'Dueñas Basurto',
    description: 'Innovación pedagógica en el Bachillerato Técnico Agropecuario de Ecuador mediante el aprendizaje experiencial y tecnologías digitales.',
    audioUrl: '/archivos/PODCAST/Dueñas_Basurto_Celulares_y_problemas_reales_transforman_el_camp.m4a',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800',
    category: 'Educación Rural',
    tags: ['Rural', 'Agro', 'Experiencial']
  },
  {
    id: 'p11',
    title: 'La apariencia física sabotea el rendimiento académico',
    author: 'Ramos, Saenz & Burnes',
    description: 'Investigación sobre cómo los prejuicios estéticos e imagen corporal impactan en el desempeño escolar y la salud mental estudiantil.',
    audioUrl: '/archivos/PODCAST/Ramos_Saenz_Burnes-La_apariencia_física_sabotea_el_rendimiento_.m4a',
    imageUrl: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=800',
    category: 'Psicología Educativa',
    tags: ['Imagen Corporal', 'Rendimiento', 'Autoestima']
  }
];
