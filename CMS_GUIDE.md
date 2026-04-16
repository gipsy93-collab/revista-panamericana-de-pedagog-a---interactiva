# Guía de Uso del CMS - RPP

## ¿Qué cambió?

A partir de ahora, el contenido nuevo del sitio principal de la **Revista Panamericana de Pedagogía** se gestiona desde un panel de administración visual, sin necesidad de tocar código.

## Acceso al CMS

1. Abre tu navegador y ve a: `http://localhost:3000/admin` (en desarrollo local)
2. En producción, será: `https://tudominio.com/admin`
3. Inicia sesión con tu cuenta de Git (la configuración de autenticación la hace el equipo técnico una sola vez).

## Estructura del CMS

El panel tiene tres secciones principales:

### 1. Artículos Interactivos
Aquí creas y editas la metadata de los artículos que aparecen en el carrusel de portadas.

**Campos importantes:**
- **ID**: Identificador único. Si el artículo ya tiene una experiencia interactiva programada (componente React custom), el ID debe coincidir exactamente.
- **Tiene experiencia interactiva interna**: Actívalo si el artículo abre un componente React custom al hacer clic en "Explorar Investigación".
- **Plantilla genérica**: Selecciona `generic` solo si quieres generar un artículo de lectura automático **sin programar código**. Ideal para artículos nuevos que no requieren lógica custom compleja.
- **Preguntas de Quiz (solo plantilla genérica)**: Si usas la plantilla genérica, puedes agregar un quiz interactivo de opción múncaiple. Cada pregunta necesita:
  - El texto de la pregunta.
  - Una lista de opciones.
  - El índice de la opción correcta (empezando en 0).
- **Abstract / Cuerpo**: Este texto aparece en el modal de portada y, para artículos genéricos, es el contenido principal del artículo. Soporta formato Markdown.

### 2. Transmedia
Aquí gestionas los proyectos multimedia: **podcasts, videos documentales, infografías y datos interactivos**.

**Campos importantes:**
- **Tipo**: Podcast, Video Documental, Datos Interactivos, Infografía o Video.
- **Imagen**: Puedes subir una imagen directamente desde tu computadora. El CMS la guardará en `public/assets/uploads/`.
- **Link**: URL a la que lleva el botón "Explorar Proyecto". Puede ser una URL externa (YouTube, Spotify) o interna.

### 3. Blog
Aquí creas las entradas del blog que aparecen en la sección inferior del sitio.

**Campos importantes:**
- **Color de fondo**: Clase de Tailwind CSS (ej. `bg-[#0f3896]`).
- **Color de texto**: `text-white` o `text-black`.
- **Icono**: Elige entre los iconos disponibles (`BookOpen`, `Feather`, `Eye`, `MessageCircle`).

## Cómo publicar contenido

1. Entra a `/admin`.
2. Selecciona la colección que quieres editar (Artículos, Transmedia o Blog).
3. Clica en **"New"** o edita un elemento existente.
4. Llena los campos y sube las imágenes que necesites.
5. Guarda los cambios con el botón **"Publish"**.
6. El CMS generará automáticamente un archivo Markdown en el repositorio.
7. El equipo de deploy debe reconstruir y publicar el sitio para que los cambios sean visibles.

## Sobre las imágenes

- Las imágenes subidas desde el CMS se guardan en: `public/assets/uploads/`
- Una vez subidas, se referencian automáticamente en los campos de imagen.
- Si prefieres usar una imagen externa (Unsplash, CDN), simplemente pega la URL completa en el campo correspondiente.

## Artículos con experiencia interactiva custom vs. genérica

| Tipo | ¿Requiere código? | ¿Cómo se configura? |
|------|-------------------|---------------------|
| **Custom** (los ~22 artículos actuales) | Sí, previo | Solo se edita su metadata (título, autor, imagen) en el CMS. La lógica interactiva sigue en React. |
| **Genérico** (nuevos artículos) | No | Seleccionas `generic` en el CMS, escribes el contenido en Markdown y opcionalmente agregas un quiz. |

## Tips de formato Markdown

El campo **Abstract / Cuerpo** acepta Markdown básico:

```markdown
# Título principal
## Subtítulo
Texto normal con **negrita** e *itálica*.

- Viñeta 1
- Viñeta 2

> Esta es una cita destacada.
```

## ¿Necesitas ayuda?

Si algo no funciona como esperas, contacta al equipo técnico con:
- El enlace al artículo o proyecto que intentaste crear.
- Una captura de pantalla del error.
- El mensaje exacto que aparece en la consola del navegador (F12 > Consola).
