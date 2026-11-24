# ADROX — Sitio web corporativo

Sitio corporativo de **ADROX**, iniciativa tecnológica de ingeniería digital y desarrollo de soluciones para Ecuador y Latinoamérica.

> *Convertimos ideas en soluciones tecnológicas.*

Sitio **estático** construido con Astro, TypeScript y Tailwind CSS, preparado para **Microsoft Azure Static Web Apps**. No requiere servidor backend encendido.

---

## Índice

1. [Requisitos](#requisitos)
2. [Ejecutar en Windows (PowerShell)](#ejecutar-en-windows-powershell)
3. [Scripts disponibles](#scripts-disponibles)
4. [Estructura del proyecto](#estructura-del-proyecto)
5. [Editar contenido](#editar-contenido)
6. [Formulario de contacto](#formulario-de-contacto)
7. [Despliegue en Azure Static Web Apps](#despliegue-en-azure-static-web-apps)
8. [Dominio personalizado](#dominio-personalizado)
9. [Información pendiente de completar](#información-pendiente-de-completar)
10. [Decisiones técnicas](#decisiones-técnicas)
11. [Limitaciones conocidas](#limitaciones-conocidas)

---

## Requisitos

| Herramienta | Versión |
|---|---|
| Node.js | **22.23.4 o superior** (recomendado: la última LTS 22.x o 24.x) |
| npm | 9.6.5 o superior (incluido con Node.js) |
| Git | Cualquier versión reciente |

Comprueba tus versiones en PowerShell:

```powershell
node --version
npm --version
git --version
```

Si necesitas instalar o actualizar Node.js en Windows:

```powershell
winget install OpenJS.NodeJS.LTS
```

Cierra y vuelve a abrir PowerShell después de instalar.

---

## Ejecutar en Windows (PowerShell)

```powershell
# 1. Entrar en la carpeta del proyecto
cd C:\ruta\a\adrox-web

# 2. Instalar dependencias (solo la primera vez o cuando cambie package-lock.json)
npm ci

# 3. Servidor de desarrollo con recarga automática
npm run dev
# Abre http://localhost:4321 en el navegador. Ctrl + C para detenerlo.

# 4. Compilar la versión de producción (comprueba tipos y genera /dist)
npm run build

# 5. Previsualizar la versión compilada
npm run preview
```

Si PowerShell bloquea la ejecución de `npm` con un error de *execution policy*, ejecuta una vez:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Para compilar con la URL definitiva del sitio (sitemap, URL canónicas y Open Graph):

```powershell
$env:SITE_URL = "https://www.tudominio.com"
npm run build
Remove-Item Env:SITE_URL
```

---

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo en `http://localhost:4321` |
| `npm run build` | `astro check` (TypeScript) + compilación estática en `dist/` |
| `npm run build:fast` | Compilación sin comprobación de tipos |
| `npm run preview` | Sirve `dist/` localmente |
| `npm run check` | Solo comprobación de tipos y diagnósticos de Astro |

---

## Estructura del proyecto

```
adrox-web/
├── .github/workflows/azure-static-web-apps.yml   # CI/CD hacia Azure
├── public/
│   ├── staticwebapp.config.json   # Cabeceras, caché, 404 y URLs limpias en Azure
│   ├── favicon.svg / favicon.ico / site.webmanifest
│   ├── icons/                     # Iconos de app y logotipo PNG
│   └── images/
│       ├── og/adrox-og.png        # Imagen para redes sociales (1200×630)
│       ├── projects/              # Evidencias visuales de proyectos (vacío)
│       └── team/                  # Fotografía del fundador (vacío)
├── src/
│   ├── data/                      # ★ CONTENIDO EDITABLE (separado de la presentación)
│   │   ├── site-config.ts         #   Contacto, redes, fundador, URL de formulario
│   │   ├── projects.ts            #   Portafolio y casos de estudio
│   │   ├── services.ts            #   Áreas de especialización
│   │   ├── technologies.ts        #   Tecnologías por grupo
│   │   ├── methodology.ts         #   Etapas de trabajo
│   │   └── navigation.ts          #   Menú principal y botón destacado
│   ├── components/
│   │   ├── layout/                # Header, Footer, SEO, PageHeader
│   │   ├── navigation/            # NavLink, MobileMenu
│   │   ├── sections/              # Hero, Servicios, Proyectos, Metodología, etc.
│   │   ├── projects/              # ProjectCard, ProjectVisual, ArchitectureDiagram
│   │   └── ui/                    # Button, Icon, Logo, Tag, StatusBadge, PendingNote
│   ├── layouts/BaseLayout.astro   # HTML base, fuentes, metadatos, scripts globales
│   ├── lib/url.ts                 # Utilidades de rutas y URL absolutas
│   ├── pages/
│   │   ├── index.astro            # /
│   │   ├── servicios.astro        # /servicios
│   │   ├── proyectos/index.astro  # /proyectos (con filtro por categoría)
│   │   ├── proyectos/[slug].astro # /proyectos/<slug> (casos de estudio)
│   │   ├── nosotros.astro         # /nosotros
│   │   ├── contacto.astro         # /contacto
│   │   ├── 404.astro
│   │   └── robots.txt.ts          # robots.txt generado con la URL del sitio
│   └── styles/global.css          # Tokens de diseño (colores, tipografía) y utilidades
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## Editar contenido

Todo el contenido vive en `src/data/`. No es necesario modificar componentes para cambiar textos o añadir elementos.

### Añadir un proyecto

1. Abre `src/data/projects.ts`.
2. Copia un objeto del arreglo `projects`, cambia el `slug` (será la URL `/proyectos/<slug>`) y completa los campos.
3. Los campos `problem`, `objective`, `solution`, `architecture` y `scope` son opcionales: si faltan, el caso de estudio muestra *"Pendiente de documentar"* en lugar de inventar contenido.
4. Para evidencias visuales, guarda las imágenes en `public/images/projects/<slug>/` (WebP o JPG, < 300 KB, ancho ~1600 px) y regístralas en `evidence`:

```ts
evidence: [
  { src: '/images/projects/costify/panel.webp', alt: 'Panel de costos de Costify', caption: 'Vista del módulo de costos', width: 1600, height: 1000 },
],
```

5. Si existe repositorio o demo pública, completa `repositoryUrl` y `demoUrl`.

La tarjeta, el filtro, la página del caso de estudio, el sitemap y los datos estructurados se generan automáticamente.

### Añadir un servicio o tecnología

Agrega un objeto a `src/data/services.ts` o `src/data/technologies.ts`. Los iconos disponibles están en `src/components/ui/icons.ts` (iconos de [Lucide](https://lucide.dev)).

### Colores y tipografía

Los tokens están en `src/styles/global.css` (bloque `@theme`). Paleta: azul marino `#17253B`, marfil `#F3F1EB`, verde petróleo `#238C91`, bronce `#B68A58`, blanco. Las variantes `-700` se usan para texto sobre fondos claros y cumplen contraste WCAG AA.

---

## Formulario de contacto

El formulario **valida los campos** (nombre, correo, empresa opcional, tipo de proyecto y descripción) y **nunca simula un envío exitoso**. Su comportamiento depende de `src/data/site-config.ts → contact`:

| Configuración | Comportamiento |
|---|---|
| `formEndpoint` definido | Envía `POST` (multipart/form-data) a ese endpoint. Muestra éxito **solo** si el servidor responde 2xx; si falla, informa que el mensaje no se envió. |
| Solo `email` definido (**estado actual**: `adroxsolution@gmail.com`) | Abre el cliente de correo del visitante (`mailto:`) con asunto y cuerpo preparados, y aclara que el envío se completa desde su correo. |
| Ninguno | Muestra un aviso visible de **"Canal de contacto pendiente de configuración"**. Valida los datos pero no envía nada. |

Campos enviados al endpoint: `nombre`, `email`, `empresa`, `tipo`, `mensaje`. Incluye un campo trampa anti‑spam (`website`) que no se envía.

**Opciones de endpoint** (no requieren mantener un servidor propio): Formspree, Getform, Basin, una Azure Function integrada en Static Web Apps o un flujo HTTP de Power Automate. Las claves privadas deben quedarse en ese servicio; **nunca** las pongas en `site-config.ts`, porque ese archivo se publica en el navegador.

> Si usas un endpoint de otro dominio, ya está permitido por la política CSP (`connect-src 'self' https:`) definida en `public/staticwebapp.config.json`.

---

## Despliegue en Azure Static Web Apps

### 1. Subir el proyecto a GitHub

```powershell
cd C:\ruta\a\adrox-web
git init
git add .
git commit -m "Sitio corporativo ADROX"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/adrox-web.git
git push -u origin main
```

### 2. Crear el recurso en Azure

**Opción A — Portal de Azure**

1. Entra en <https://portal.azure.com> → **Crear un recurso** → **Static Web App**.
2. Plan: **Free** (suficiente para un sitio corporativo) o **Standard**.
3. Origen de implementación: **Other** (el workflow ya está incluido en el repositorio).
   *Si eliges "GitHub", Azure creará un segundo workflow: bórralo y conserva `.github/workflows/azure-static-web-apps.yml`.*
4. Al terminar, abre el recurso → **Overview** → **Manage deployment token** y copia el token.

**Opción B — Azure CLI desde PowerShell**

```powershell
winget install Microsoft.AzureCLI
az login
az group create --name rg-adrox-web --location eastus2
az staticwebapp create --name adrox-web --resource-group rg-adrox-web --location eastus2 --sku Free
az staticwebapp secrets list --name adrox-web --resource-group rg-adrox-web --query "properties.apiKey" -o tsv
```

### 3. Configurar el secreto de despliegue en GitHub

En el repositorio de GitHub: **Settings → Secrets and variables → Actions → New repository secret**

| Nombre | Valor |
|---|---|
| `AZURE_STATIC_WEB_APPS_API_TOKEN` | El *deployment token* copiado en el paso anterior |

Opcional, en la pestaña **Variables** de la misma pantalla:

| Nombre | Valor |
|---|---|
| `SITE_URL` | `https://<tu-app>.azurestaticapps.net` o tu dominio definitivo |

> El token **no** debe guardarse en ningún archivo del repositorio.

### 4. Desplegar

Cada `push` a `main` ejecuta el workflow: instala dependencias, comprueba tipos, compila y sube `dist/` a Azure. Los *pull requests* crean un entorno de vista previa que se elimina al cerrarlos. También puedes lanzarlo manualmente desde **Actions → Azure Static Web Apps CI/CD → Run workflow**.

### Configuración incluida (`public/staticwebapp.config.json`)

- URLs limpias sin barra final (`/servicios`, `/proyectos/costify`).
- Página 404 personalizada con código HTTP 404.
- Caché de un año para los recursos versionados de `/_astro/`.
- Cabeceras de seguridad: CSP, HSTS, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.

---

## Dominio personalizado

1. En Azure: recurso Static Web App → **Custom domains** → **Add**.
2. **Subdominio** (`www.tudominio.com`): crea en tu proveedor DNS un registro **CNAME** que apunte a `<tu-app>.azurestaticapps.net`.
3. **Dominio raíz** (`tudominio.com`): usa el registro **TXT** de validación que indica Azure y luego un registro **ALIAS/ANAME** (o Azure DNS) hacia la app.
4. Azure emite el certificado HTTPS automáticamente.
5. Actualiza la variable `SITE_URL` en GitHub (y el valor por defecto en `astro.config.mjs`) con el dominio definitivo y vuelve a desplegar, para que el sitemap, `robots.txt`, las URL canónicas y Open Graph usen el dominio correcto.

---

## Información pendiente de completar

Busca `PENDIENTE` en el proyecto (`Ctrl + Shift + F` en VS Code) para localizar cada punto.

| Dato | Archivo | Campo |
|---|---|---|
| Endpoint del formulario (opcional) | `src/data/site-config.ts` | `contact.formEndpoint` |
| Teléfono / WhatsApp (opcional) | `src/data/site-config.ts` | `contact.phone` |
| Tiempo de respuesta (opcional) | `src/data/site-config.ts` | `contact.responseTime` |
| Redes sociales | `src/data/site-config.ts` | `social[].url` |
| Fundador: nombre, foto, perfil, especialidades, LinkedIn, GitHub | `src/data/site-config.ts` | `founder` |
| Fotografía del fundador | `public/images/team/` | Imagen cuadrada ≥ 800×800 |
| Dominio definitivo | GitHub (variable `SITE_URL`) y `astro.config.mjs` | `SITE_URL` |
| Evidencias visuales de cada proyecto | `public/images/projects/<slug>/` + `projects.ts` | `evidence` |
| Repositorios o demos públicas | `src/data/projects.ts` | `repositoryUrl`, `demoUrl` |
| Revisión de problema/objetivo/solución/arquitectura de cada caso | `src/data/projects.ts` | Textos prudentes redactados a partir de la descripción entregada |
| Logotipo oficial (si existe) | `src/components/ui/Logo.astro`, `public/favicon.svg`, `public/icons/` | — |

Los datos vacíos **no se muestran** en el sitio ni en los datos estructurados, salvo en el perfil del fundador y el formulario, donde aparecen marcados como pendientes para que sea evidente qué falta.

---

## Decisiones técnicas

- **Astro 7.4 + TypeScript estricto + Tailwind CSS 4** (vía `@tailwindcss/vite`). Astro genera HTML estático sin framework de cliente; los pocos scripts (menú móvil, filtro, formulario, animaciones) son TypeScript nativo y se incrustan solo en las páginas que los usan.
- **Node.js ≥ 22.23.4**: lo exige Astro 7. El workflow usa la versión de `.nvmrc` (22).
- **Contenido como datos TypeScript** (`src/data/*.ts`) en lugar de Markdown/colecciones: los casos de estudio tienen campos estructurados (arquitectura por capas, alcance, notas), y el tipado avisa en compilación si falta un campo obligatorio.
- **Tipografía IBM Plex Sans + IBM Plex Mono**, autoalojadas con Fontsource (sin peticiones a Google Fonts). Plex tiene raíces en ingeniería y aporta un carácter técnico-institucional distinto a las plantillas genéricas.
- **Iconos Lucide** (`@lucide/astro`) renderizados como SVG en tiempo de compilación, sin JavaScript. Los iconos de marca (LinkedIn, GitHub…) se dibujaron aparte porque Lucide los retiró.
- **Ilustraciones abstractas en SVG** para el hero y cada proyecto (módulos, puntos articulares, nodos IoT, landmarks de mano, ondas/constelación). Se marcan explícitamente como ilustraciones, no capturas.
- **Animaciones**: aparición progresiva con `IntersectionObserver` y trazado de líneas en el hero. Se desactivan con `prefers-reduced-motion` y el contenido es visible sin JavaScript.
- **Accesibilidad**: enlace "Saltar al contenido", foco visible, menú móvil con `aria-expanded`, cierre con Escape y foco contenido, formularios con `aria-invalid` y mensajes asociados, contraste AA verificado con axe-core.
- **SEO**: título y descripción por página, canonical, Open Graph/Twitter, sitemap (`@astrojs/sitemap`), `robots.txt`, JSON‑LD (`Organization`, `WebSite`, `ItemList` de servicios, `CollectionPage`, `BreadcrumbList` y `CreativeWork` por caso de estudio) sin dirección ni teléfono inventados.
- **Compilación en GitHub Actions** y subida de `dist/` (`skip_app_build: true`) para controlar la versión de Node y ejecutar la comprobación de tipos antes de desplegar.

---

## Limitaciones conocidas

- El formulario funciona en modo `mailto:` (abre el correo del visitante). Para recibir envíos directos sin cliente de correo, configura `contact.formEndpoint`. El modo `mailto:` depende de que el visitante tenga un cliente de correo configurado.
- Sin dominio definitivo, el sitemap, `robots.txt` y las URL canónicas usan `https://adrox.example.com` como marcador.
- La CSP permite `'unsafe-inline'` en scripts y estilos porque Astro incrusta los scripts pequeños en el HTML. Se puede endurecer con *hashes* si se requiere.
- Los proyectos no tienen evidencias visuales reales; se muestran ilustraciones abstractas y un espacio "Evidencia visual pendiente".
- Las arquitecturas de los casos de estudio se describieron a partir de las tecnologías indicadas y deben revisarse con el diseño real de cada proyecto.
- El sitio está solo en español.
