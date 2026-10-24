# Wiki de Sistemas Operativos 1

<div align="center">

<img width="100%" alt="Wiki de Sistemas Operativos 1" src="https://github.com/user-attachments/assets/3c429e21-c1b5-4ec8-9d43-ecea2cb645a6" />

<br/>

### Plataforma educativa interactiva sobre arquitectura, procesos, memoria y concurrencia

Documentación teórica y simuladores interactivos para comprender los fundamentos de los sistemas operativos.

[![Astro](https://img.shields.io/badge/Astro-7.1.6-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Starlight](https://img.shields.io/badge/Starlight-Documentation-111827?style=for-the-badge&logo=astro&logoColor=white)](https://starlight.astro.build/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Publicado-222222?style=for-the-badge&logo=github&logoColor=white)](https://hugo4294.github.io/wiki-sistemas-operativos-/)

<br/>

<a href="https://hugo4294.github.io/wiki-sistemas-operativos-/" target="_blank">
  <img src="https://img.shields.io/badge/ABRIR%20WIKI-2563EB?style=for-the-badge" alt="Abrir wiki"/>
</a>

<br/><br/>

### Simuladores interactivos

<a href="https://hugo4294.github.io/wiki-sistemas-operativos-/simulador.html" target="_blank">
  <img src="https://img.shields.io/badge/Simulador%20de%20procesos%20y%20memoria-0F766E?style=for-the-badge" alt="Simulador de procesos y memoria"/>
</a>

<br/><br/>

<a href="https://hugo4294.github.io/wiki-sistemas-operativos-/simulador-interbloqueos.html" target="_blank">
  <img src="https://img.shields.io/badge/Algoritmo%20del%20Banquero-7C3AED?style=for-the-badge" alt="Simulador del algoritmo del Banquero"/>
</a>

<br/><br/>

<a href="https://hugo4294.github.io/wiki-sistemas-operativos-/simulador-bloqueos.html" target="_blank">
  <img src="https://img.shields.io/badge/Simulador%20de%20interbloqueos-DC2626?style=for-the-badge" alt="Simulador de interbloqueos"/>
</a>

<br/><br/>


</div>

---

## Descripción del proyecto

**Wiki de Sistemas Operativos 1** es una plataforma web educativa que reúne documentación técnica y herramientas interactivas para estudiar los principales conceptos de los sistemas operativos.

El proyecto combina documentación organizada por unidades con simuladores que permiten explorar la planificación de procesos, la gestión de memoria y los problemas de concurrencia.

La plataforma está construida con **Astro y Starlight**, y se publica mediante **GitHub Pages** para que pueda consultarse desde cualquier navegador con acceso a Internet.

## Objetivos

- Organizar los contenidos de Sistemas Operativos 1 en una estructura de documentación clara.
- Explicar conceptos relacionados con el funcionamiento interno de los sistemas operativos.
- Facilitar el aprendizaje mediante simulaciones interactivas.
- Estudiar la administración de recursos, la sincronización de procesos y los interbloqueos.
- Mantener un proyecto web que pueda actualizarse y ampliarse progresivamente.

## Módulos educativos

| Unidad | Tema | Contenidos principales |
|:---:|---|---|
| 01 | Fundamentos y arquitectura | Modos de usuario y kernel, llamadas al sistema, interrupciones y arquitecturas de sistemas operativos. |
| 02 | Procesos y planificación | PCB, estados de los procesos, cambio de contexto, algoritmos de planificación de CPU y administración de procesos. |
| 03 | Concurrencia y sincronización | Secciones críticas, exclusión mutua, mutex, semáforos, monitores y problemas clásicos de concurrencia. |
| 04 | Interbloqueos | Condiciones de interbloqueo, asignación de recursos, algoritmo del Banquero, detección y recuperación de bloqueos. |

Consulta los temas y materiales disponibles desde la [wiki publicada](https://hugo4294.github.io/wiki-sistemas-operativos-/).

---

## Simuladores interactivos

La plataforma dispone de accesos independientes para consultar los simuladores publicados.

### 1. Simulador de procesos y memoria

<a href="https://hugo4294.github.io/wiki-sistemas-operativos-/simulador.html" target="_blank">
  <img src="https://img.shields.io/badge/Abrir%20simulador-0F766E?style=for-the-badge" alt="Abrir simulador de procesos y memoria"/>
</a>

Permite explorar conceptos relacionados con la administración de procesos y la memoria mediante una interfaz web interactiva.

Entre los conceptos que aborda el simulador se encuentran la creación de procesos, sus estados y la planificación de CPU, de acuerdo con las funcionalidades implementadas.

### 2. Simulador del algoritmo del Banquero

<a href="https://hugo4294.github.io/wiki-sistemas-operativos-/simulador-interbloqueos.html" target="_blank">
  <img src="https://img.shields.io/badge/Abrir%20simulador-7C3AED?style=for-the-badge" alt="Abrir algoritmo del Banquero"/>
</a>

Está dedicado al estudio del algoritmo del Banquero, utilizado para analizar solicitudes de recursos y determinar si un estado del sistema es seguro.

Este algoritmo ayuda a comprender cómo un sistema puede evitar conceder asignaciones que lo conduzcan a un estado inseguro.

### 3. Simulador de interbloqueos concurrentes

<a href="https://hugo4294.github.io/wiki-sistemas-operativos-/simulador-bloqueos.html" target="_blank">
  <img src="https://img.shields.io/badge/Abrir%20simulador-DC2626?style=for-the-badge" alt="Abrir simulador de interbloqueos"/>
</a>

Permite explorar situaciones de bloqueo entre tareas concurrentes y estudiar cómo se producen las esperas por recursos.

Se relaciona con los conceptos de concurrencia, espera circular, detección de ciclos y recuperación de interbloqueos.

> Nota: los simuladores son recursos independientes. Su funcionamiento específico depende del código implementado en cada archivo.

---

## Arquitectura del sistema operativo

La documentación aborda los principales componentes y mecanismos que intervienen en la ejecución de los programas.

1. **Planificador de CPU:** administra la asignación del procesador a los procesos.
2. **Administrador de memoria:** gestiona el espacio de memoria utilizado por los procesos.
3. **Sistema de archivos y entrada/salida:** organiza los archivos y las operaciones de comunicación con los dispositivos.
4. **Gestión de procesos:** mantiene información sobre los procesos y sus estados.
5. **Mecanismos de sincronización:** coordinan el acceso a los recursos compartidos.
6. **Gestión de interbloqueos:** estudia las condiciones que producen bloqueos y los métodos para prevenirlos, detectarlos o recuperarse de ellos.

## Tecnologías utilizadas

| Tecnología | Función dentro del proyecto |
|---|---|
| Astro | Framework utilizado para generar y construir el sitio web. |
| Starlight | Integración de Astro para crear la estructura de documentación y navegación. |
| Markdown | Formato para redactar títulos, párrafos, listas y enlaces. |
| MDX | Permite combinar documentación con componentes y expresiones JSX. |
| HTML5 | Estructura las páginas y los simuladores web. |
| CSS3 | Define la presentación visual de los elementos web. |
| JavaScript | Permite implementar la lógica interactiva del lado del navegador. |
| Node.js y npm | Proporcionan el entorno y las herramientas para instalar dependencias y ejecutar tareas de desarrollo. |
| Git | Permite registrar cambios y administrar las versiones del proyecto. |
| GitHub | Aloja el repositorio y el código fuente. |
| GitHub Pages | Publica el sitio web mediante una dirección accesible por Internet. |

### Dependencias principales

- `@astrojs/starlight`: estructura y funcionalidades de documentación.
- `remark-math`: procesamiento de expresiones matemáticas en Markdown.
- `rehype-katex`: representación visual de fórmulas matemáticas.
- `sharp`: procesamiento y optimización de imágenes cuando corresponde.

Las versiones exactas de las dependencias se pueden consultar en el archivo `package.json`.

## Estructura del repositorio

```text
wiki-sistemas-operativos-/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── fondo.jpg
│   ├── readme-portada.png
│   ├── simulador.html
│   ├── simulador-interbloqueos.html
│   └── simulador-bloqueos.html
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── custom.css
│   └── content/
│       └── docs/
│           ├── index.mdx
│           ├── unidad-1/
│           ├── unidad-2/
│           ├── unidad-3/
│           └── unidad-4/
├── astro.config.mjs
├── package.json
└── README.md
```

**Descripción de los directorios y archivos:**

- `public/`: recursos estáticos y archivos independientes de los simuladores.
- `src/content/docs/`: documentación organizada por unidades.
- `src/assets/styles/`: estilos personalizados utilizados por el proyecto.
- `astro.config.mjs`: configuración de Astro y Starlight.
- `package.json`: dependencias y scripts del proyecto.
- `.github/workflows/`: configuración de flujos automatizados de GitHub Actions, si se utiliza el archivo de despliegue indicado.

## Desarrollo local

Para trabajar con el proyecto es necesario contar con Node.js y npm instalados.

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Genera la versión de producción:

```bash
npm run build
```

Comprueba la versión generada localmente con el comando de vista previa, si está disponible en `package.json`:

```bash
npm run preview
```

## Publicación

La wiki se encuentra publicada mediante GitHub Pages.

**Sitio web:**  
https://hugo4294.github.io/wiki-sistemas-operativos-/

**Repositorio:**  
https://github.com/HUgo4294/wiki-sistemas-operativos-

El repositorio contiene los archivos fuente, mientras que GitHub Pages sirve la versión web publicada. La actualización puede automatizarse mediante GitHub Actions si el flujo de despliegue está configurado correctamente.

## Autoría y propósito académico

Proyecto académico desarrollado para el estudio de Sistemas Operativos 1. Su propósito es complementar la documentación teórica con recursos que faciliten la comprensión de los procesos, la administración de recursos, la concurrencia y los interbloqueos.

---


