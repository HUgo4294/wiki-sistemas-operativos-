
README_actualizado.md


<p align="center"> <img src="public/readme-portada.png" alt="Wiki de Sistemas Operativos 1" width="100%"> </p>

💻 Wiki de Sistemas Operativos 1
Wiki educativa desarrollada para el curso de Sistemas Operativos 1.

Este proyecto presenta de manera clara, organizada y visual los principales conceptos relacionados con los sistemas operativos, combinando contenido teórico, ejemplos, diagramas y simulaciones.

🌐 Acceso directo a la Wiki
👉 Abrir Wiki de Sistemas Operativos 1
📚 Contenido de la Wiki
📘 Unidad 1: Introducción a los Sistemas Operativos
Concepto de sistema operativo.

Historia y evolución.

Funciones principales.

Kernel.

Gestión de procesos y memoria.

Sistemas de archivos.

Dispositivos de entrada y salida.

Llamadas al sistema e interrupciones.

Modos usuario y kernel.

Arquitectura de los sistemas operativos.

⚙️ Unidad 2: Definición y Control de Procesos
Programa y proceso.

Ciclo de vida y estados de los procesos.

PCB y PID.

Planificador o scheduler.

Cambio de contexto.

Hilos y colas de procesos.

Planificación de CPU.

FCFS, SJF, SRTF y Round Robin.

Prioridades y aging.

🔄 Unidad 3: Concurrencia
Concurrencia y paralelismo.

Procesos e hilos concurrentes.

Recursos compartidos.

Condiciones de carrera.

Sección crítica y exclusión mutua.

Algoritmos de Dekker y Peterson.

Mutex, semáforos y monitores.

Productor-consumidor.

Lectores y escritores.

Comunicación entre procesos.

Inanición e interbloqueo.

🧠 Funcionamiento de un Sistema Operativo
<p align="center"> <img src="public/readme-sistemas-operativos.png" alt="Procesos, CPU, memoria y recursos del sistema operativo" width="100%"> </p>

El sistema operativo coordina los procesos, la memoria RAM, los archivos, los dispositivos y el tiempo de CPU. Esta Wiki utiliza ejemplos visuales para explicar cómo se relacionan todos estos componentes.

🖥️ Simulador de Procesos
La Wiki incluye un simulador interactivo de procesos que permite visualizar cómo el sistema operativo administra los procesos y los recursos disponibles.

Entre sus funciones se encuentran:

Creación y visualización de procesos.

Administración de memoria RAM.

Estados de los procesos.

Ejecución y seguimiento del progreso.

Simulación de planificación de CPU.

El simulador se puede abrir desde la Unidad 2.

🖼️ Recursos Visuales
Diagramas.

Mapas conceptuales.

Esquemas de memoria.

Ciclos de vida de los procesos.

Mapas generales de procesos.

Tablas comparativas.

Tarjetas informativas.

🛠️ Tecnologías utilizadas
Astro

Starlight

HTML

CSS

JavaScript

Markdown / MDX

Git y GitHub

GitHub Pages

Visual Studio Code

📂 Estructura principal del proyecto
wiki-sistemas-operativos/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│   ├── fondo.jpg
│   ├── readme-portada.png
│   ├── readme-sistemas-operativos.png
│   ├── imagen-simulador.png
│   ├── estructura-memoria.png
│   ├── cola-procesos.png
│   ├── mapa-general-procesos.png
│   ├── programa-proceso.png
│   └── simulador.html
│
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── custom.css
│   └── content/
│       └── docs/
│           ├── index.mdx
│           ├── unidad-1/
│           │   └── introduccion.mdx
│           ├── unidad-2/
│           │   └── procesos-y-control.mdx
│           └── unidad-3/
│               └── concurrencia.mdx
│
├── astro.config.mjs
├── package.json
└── README.md
🚀 Ejecución local
npm install
npm run dev
🌍 Página publicada
🔗 https://hugo4294.github.io/wiki-sistemas-operativos-/
👨‍💻 Autor
Proyecto educativo desarrollado por Hugo4294 para el curso de Sistemas Operativos 1.
