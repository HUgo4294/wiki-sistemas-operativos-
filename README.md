# 💻 Wiki de Sistemas Operativos

## 📚 Descripción del proyecto

Este proyecto consiste en la creación de una **Wiki de Sistemas Operativos**, desarrollada utilizando **Astro y Starlight**.

La idea principal de este proyecto es reunir información importante sobre los Sistemas Operativos y presentarla de una manera sencilla, ordenada y fácil de entender.

En esta wiki se explican diferentes temas relacionados con los Sistemas Operativos, comenzando desde los conceptos básicos y avanzando poco a poco hacia temas más específicos.

Mi objetivo es que la información pueda servir como material de apoyo para estudiantes que estén aprendiendo sobre Sistemas Operativos.

---

## 🎯 Objetivo

El objetivo principal de esta wiki es crear un espacio donde pueda encontrar y organizar información relacionada con los Sistemas Operativos.

También busco explicar los diferentes temas de una forma clara, utilizando ejemplos y explicaciones que permitan comprender mejor cómo funcionan los Sistemas Operativos.

---

## 📖 Temas de la Wiki

Actualmente, la wiki está organizada en diferentes secciones:

### 🖥️ 01. Introducción a los Sistemas Operativos

En esta sección se explican los conceptos básicos de los Sistemas Operativos.

- ¿Qué es un Sistema Operativo?
- Historia de los Sistemas Operativos
- Funciones principales
- Características
- Tipos de Sistemas Operativos
- Ejemplos de Sistemas Operativos
- Importancia de los Sistemas Operativos

### ⚙️ 02. Procesos

En esta sección se explica cómo funcionan los procesos dentro de un Sistema Operativo.

- ¿Qué es un proceso?
- Estados de un proceso
- Ciclo de vida de un proceso
- PCB (Process Control Block)
- Planificación de procesos
- Algoritmos de planificación
- Creación y terminación de procesos

### 🧠 03. Gestión de Memoria

Aquí se explican los diferentes métodos que utiliza un Sistema Operativo para administrar la memoria.

- Memoria principal
- Memoria virtual
- Paginación
- Segmentación
- Asignación de memoria
- Fragmentación

### 💾 04. Gestión de Archivos

En esta sección se explica cómo los Sistemas Operativos organizan y administran los archivos.

- Concepto de archivo
- Directorios
- Sistemas de archivos
- Permisos
- Organización de archivos
- Almacenamiento

### 🔐 05. Seguridad y Protección

En esta parte se explican algunos conceptos relacionados con la seguridad de los Sistemas Operativos.

- Seguridad informática
- Usuarios y permisos
- Autenticación
- Control de acceso
- Amenazas
- Vulnerabilidades
- Protección del sistema

---

## 🛠️ Tecnologías utilizadas

Para realizar este proyecto utilicé diferentes herramientas y tecnologías:

- **Astro:** utilizado para desarrollar el sitio web.
- **Starlight:** utilizado para crear y organizar la documentación.
- **Markdown y MDX:** utilizados para escribir el contenido de la wiki.
- **TypeScript:** utilizado principalmente en la configuración del proyecto.
- **Node.js:** necesario para ejecutar el proyecto.
- **npm:** utilizado para instalar y administrar las dependencias.

---

## 📁 Estructura del proyecto

La estructura principal de mi proyecto está organizada de la siguiente manera:

```text
wiki-sistemas-operativos/
│
├── public/
│
├── src/
│   ├── assets/
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
