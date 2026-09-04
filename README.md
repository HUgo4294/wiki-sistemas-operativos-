# 💻 Wiki de Sistemas Operativos 1

Wiki educativa desarrollada para el curso de **Sistemas Operativos 1**.

Este proyecto tiene como objetivo presentar de una manera clara, organizada y visual los principales conceptos relacionados con los sistemas operativos, combinando contenido teórico, ejemplos, diagramas y simulaciones.

---

## 📚 Contenido de la Wiki

El proyecto está organizado por unidades para facilitar el estudio de cada tema.

### 📘 Unidad 1: Introducción a los Sistemas Operativos

En esta unidad se estudian los fundamentos de los sistemas operativos, entre ellos:

- Concepto de Sistema Operativo.
- Historia y evolución.
- Funciones principales.
- Kernel.
- Gestión de procesos.
- Gestión de memoria.
- Sistema de archivos.
- Dispositivos de entrada y salida.
- Llamadas al sistema.
- Interrupciones.
- Modos Usuario y Kernel.
- Arquitectura de los Sistemas Operativos.

### ⚙️ Unidad 2: Definición y Control de Procesos

Esta unidad explica cómo un Sistema Operativo crea, administra y controla los procesos.

Entre los temas incluidos se encuentran:

- Programa y proceso.
- Ciclo de vida de un proceso.
- Estados de los procesos.
- PCB (Process Control Block).
- PID.
- Scheduler.
- Cambio de contexto.
- Hilos.
- Colas de procesos.
- Planificación de CPU.
- FCFS.
- SJF.
- SRTF.
- Round Robin.
- Prioridades.
- Aging.

También se incluyen imágenes y diagramas para facilitar la comprensión de los diferentes conceptos.

---

##  Simulador de Procesos

La Wiki incluye un **simulador interactivo de procesos** que permite poner en práctica algunos de los conceptos estudiados.

El simulador permite visualizar de una forma más sencilla cómo el Sistema Operativo administra los procesos y los recursos disponibles.

Entre sus funciones se encuentran:

- Creación de procesos.
- Visualización de procesos.
- Administración de memoria RAM.
- Estados de los procesos.
- Ejecución de procesos.
- Seguimiento del progreso.
- Simulación de planificación de CPU.

---

## 🖼️ Recursos Visuales

Para facilitar el aprendizaje se utilizan diferentes recursos gráficos como:

- Diagramas.
- Mapas conceptuales.
- Esquemas de memoria.
- Representaciones del ciclo de vida de los procesos.
- Mapas generales de procesos.
- Ejemplos visuales.
- Tablas comparativas.

---

## 🛠️ Tecnologías utilizadas

El proyecto fue desarrollado utilizando:

- **Astro**
- **Starlight**
- **HTML**
- **CSS**
- **JavaScript**
- **Markdown / MDX**
- **Git**
- **GitHub**
- **Visual Studio Code**

---

## 📂 Estructura principal del proyecto

```text
wiki-sistemas-operativos/
│
├── public/
│   ├── imagen-simulador.png
│   ├── estructura-memoria.png
│   ├── mapa-general-procesos.png
│   ├── programa-proceso.png
│   └── simulador.html
│
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── custom.css
│   │
│   └── content/
│       └── docs/
│           ├── unidad-1/
│           │   └── introduccion.mdx
│           │
│           └── unidad-2/
│               └── procesos-y-control.mdx
│
├── astro.config.mjs
├── package.json
└── README.md
