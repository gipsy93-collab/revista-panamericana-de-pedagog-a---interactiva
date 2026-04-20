import glob
import os

# Common Spanish word replacements for corrupted characters
# Based on context clues from the titles and content
replacements = {
    'discriminaci�n': 'discriminación',
    'apariencia f�sica': 'apariencia física',
    'Ramos-Sol�s': 'Ramos-Solís',
    'S�enz-Gonz�lez': 'Sáenz-González',
    'Elizondo-Garc�a': 'Elizondo-García',
    'fenomenol�gico': 'fenomenológico',
    'c�mo': 'cómo',
    'acad�mica': 'académica',
    '�lite': 'élite',
    'Discriminaci�n': 'Discriminación',
    'innovaci�n': 'innovación',
    'pedag�gica': 'pedagógica',
    'agropecuarios': 'agropecuarios',
    'pr�cticas': 'prácticas',
    'sostenibles': 'sostenibles',
    'did�cticas': 'didácticas',
    'participaci�n': 'participación',
    'entornos virtuales': 'entornos virtuales',
    'desafiliaci�n': 'desafiliación',
    'exploraci�n': 'exploración',
    'reflexiones': 'reflexiones',
    'docentes respecto': 'docentes respecto',
    'consumo de drogas': 'consumo de drogas',
    'establecimientos educacionales': 'establecimientos educacionales',
    'secundarios': 'secundarios',
    'Inclusi�n': 'Inclusión',
    'cultura de paz': 'cultura de paz',
    'percepciones': 'percepciones',
    'contexto de violencia': 'contexto de violencia',
    'delictiva': 'delictiva',
    'Dimensi�n': 'Dimensión',
    'formaci�n': 'formación',
    'inicial docente': 'inicial docente',
    'Ciberacoso': 'Ciberacoso',
    'estudiantes universitarios': 'estudiantes universitarios',
    'postpandemia': 'postpandemia',
    'comportamientos agresivos': 'comportamientos agresivos',
    'prevenci�n': 'prevención',
    'Docentes e inclusi�n': 'Docentes e inclusión',
    'educaci�n': 'educación',
    'media superior': 'media superior',
    'hallazgos de una revisi�n': 'hallazgos de una revisión',
    'sistem�tica': 'sistemática',
    'Liderazgo docente': 'Liderazgo docente',
    'formaci�n del car�cter': 'formación del carácter',
    'transformaci�n': 'transformación',
    'Paraguay': 'Paraguay',
    'actitudes docentes': 'actitudes docentes',
    'inclusi�n educativa': 'inclusión educativa',
    'desarrollo de la escritura': 'desarrollo de la escritura',
    'acad�mica': 'académica',
    'estudiantes normalistas': 'estudiantes normalistas',
    'Teor�as': 'Teorías',
    'pedag�gicas': 'pedagógicas',
    'Nueva Escuela Mexicana': 'Nueva Escuela Mexicana',
    'Apuntes': 'Apuntes',
    'primaria': 'primaria',
    'Educaci�n': 'Educación',
    'jur�dica': 'jurídica',
    'tensiones': 'tensiones',
    'resistencias': 'resistencias',
    'oportunidades': 'oportunidades',
    'J�venes': 'Jóvenes',
    'universitarias': 'universitarias',
    'transici�n': 'transición',
    'maternidad': 'maternidad',
    'retos': 'retos',
    'crianza': 'crianza',
    'An�lisis': 'Análisis',
    'pensamiento cr�tico': 'pensamiento crítico',
    'psicom�trico': 'psicométrico',
    'intenci�n': 'intención',
    'deserci�n': 'deserción',
    'universitaria': 'universitaria',
    'estudio piloto': 'estudio piloto',
    'cine': 'cine',
    'mediador': 'mediador',
    'pedag�gico': 'pedagógico',
    'ense�anza': 'enseñanza',
    'literatura': 'literatura',
    'investigaci�n-acci�n': 'investigación-acción',
    'educativa': 'educativa',
    'Ajustes': 'Ajustes',
    'razonables': 'razonables',
    'inclusivas': 'inclusivas',
    'discapacidad': 'discapacidad',
    'trastorno del espectro autista': 'trastorno del espectro autista',
    'superior': 'superior',
}

fixed_count = 0
for fname in glob.glob('src/content/articles/*.md'):
    with open(fname, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    for bad, good in replacements.items():
        content = content.replace(bad, good)
    
    if content != original:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(content)
        fixed_count += 1
        print(f'Fixed: {os.path.basename(fname)}')

print(f'\nTotal files fixed: {fixed_count}')
