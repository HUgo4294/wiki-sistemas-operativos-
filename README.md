💻 Wiki de Sistemas Operativos

Una wiki educativa desarrollada con Astro + Starlight para recopilar, organizar y explicar de forma clara los principales conceptos relacionados con los Sistemas Operativos.

El objetivo de este proyecto es proporcionar información completa y fácil de comprender sobre el funcionamiento de los sistemas operativos, sus componentes, procesos, memoria, almacenamiento, seguridad y otros temas fundamentales.

📚 Contenido de la Wiki

La wiki está organizada en diferentes temas para facilitar el aprendizaje:

🖥️ 01. Introducción a los Sistemas Operativos
¿Qué es un Sistema Operativo?
Historia de los Sistemas Operativos
Funciones principales
Características
Tipos de Sistemas Operativos
Ejemplos de Sistemas Operativos
Importancia de los Sistemas Operativos
⚙️ 02. Procesos
Concepto de proceso
Estados de un proceso
Ciclo de vida
PCB (Process Control Block)
Planificación de procesos
Algoritmos de planificación
Creación y terminación de procesos
🧠 03. Gestión de Memoria
Memoria principal
Memoria virtual
Paginación
Segmentación
Asignación de memoria
Fragmentación
💾 04. Gestión de Archivos
Concepto de archivo
Directorios
Sistemas de archivos
Permisos
Organización y almacenamiento
🔐 05. Seguridad y Protección
Seguridad informática
Usuarios y permisos
Autenticación
Control de acceso
Amenazas y vulnerabilidades
Protección del sistema
🛠️ Tecnologías utilizadas

Este proyecto utiliza las siguientes tecnologías:

Astro — Framework utilizado para construir el sitio web.
Starlight — Sistema de documentación utilizado para crear la wiki.
Markdown / MDX — Para crear y organizar el contenido.
TypeScript — Para la configuración y desarrollo.
Node.js — Entorno necesario para ejecutar el proyecto.
npm — Administrador de paquetes.
📁 Estructura del proyecto

La estructura principal del proyecto es:

wiki-sistemas-operativos/
│
├── public/
│   └── imágenes y archivos estáticos
│
├── src/
│   ├── assets/
│   │   └── recursos e imágenes
│   │
│   ├── content/
│   │   └── docs/
│   │       ├── 01-introduccion/
│   │       ├── 02-procesos/
│   │       ├── 03-memoria/
│   │       ├── 04-archivos/
│   │       └── 05-seguridad/
│   │
│   └── content.config.ts
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
🚀 Instalación

Para utilizar este proyecto en tu computadora necesitas tener instalado Node.js.

Después, clona el repositorio:

git clone https://github.com/HUgo4294/wiki-sistemas-operativos-.git

Entra a la carpeta del proyecto:

cd wiki-sistemas-operativos-

Instala las dependencias:

npm install
▶️ Ejecutar el proyecto

Para iniciar el servidor de desarrollo:

npm run dev

Después abre en tu navegador:

http://localhost:4321

La página se actualizará automáticamente cada vez que realices cambios en los archivos.

🏗️ Crear una versión de producción

Para generar la versión final del proyecto:

npm run build

Los archivos generados se encontrarán dentro de:

dist/

También puedes comprobar la versión de producción utilizando:

npm run preview
✏️ Agregar nuevos temas

Los contenidos de la wiki se encuentran principalmente dentro de:

src/content/docs/

Para agregar un nuevo tema puedes crear un archivo .md o .mdx.

Por ejemplo:

src/content/docs/01-introduccion/que-es-un-sistema-operativo.md

Un archivo puede comenzar de la siguiente manera:

---
title: ¿Qué es un Sistema Operativo?
description: Conceptos fundamentales sobre los sistemas operativos.
---

# ¿Qué es un Sistema Operativo?

Un sistema operativo es el software encargado de administrar los recursos
de hardware y proporcionar servicios a los programas que se ejecutan
en una computadora.

## Funciones principales

- Administrar el procesador.
- Administrar la memoria.
- Gestionar archivos.
- Controlar dispositivos.
- Proporcionar seguridad.
- Permitir la interacción con el usuario.
🎯 Objetivo del proyecto

El propósito de esta wiki es servir como una herramienta de apoyo académico para estudiantes que desean aprender sobre Sistemas Operativos.

La información está organizada de manera progresiva, comenzando con conceptos básicos y avanzando hacia temas más complejos.

👨‍💻 Proyecto académico

Proyecto: Wiki de Sistemas Operativos
Tecnología principal: Astro + Starlight
Formato de contenido: Markdown / MDX

📖 Recursos
Astro
Starlight
Node.js
⭐ Contribuciones



s.

💡 La finalidad de esta wiki es aprender Sistemas Operativos de una manera sencilla, organizada y práctica.
