<div align="center">

<img width="100%" alt="Wiki de Sistemas Operativos 1 Header" src="https://github.com/user-attachments/assets/3c429e21-c1b5-4ec8-9d43-ecea2cb645a6" />

<br>

# 💻 Wiki Interactiva & Simulador de Sistemas Operativos I

### Plataforma web educativa de alto rendimiento sobre gestión de procesos, administración de memoria, concurrencia y planificación de CPU.

[![Astro](https://img.shields.io/badge/Astro-v5.0-5C2D91?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Starlight](https://img.shields.io/badge/Starlight-Documentation-111827?style=for-the-badge&logo=astro&logoColor=white)](https://starlight.astro.build/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-222222?style=for-the-badge&logo=github&logoColor=white)](https://hugo4294.github.io/wiki-sistemas-operativos-/)
[![CI/CD Status](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/HUgo4294/wiki-sistemas-operativos-/actions)
![Estado](https://img.shields.io/badge/Estado-Publicado%20%26%20Funcional-16A34A?style=for-the-badge)

<br>

[ Explora la Wiki Online](https://hugo4294.github.io/wiki-sistemas-operativos-/) • [🎮 Probar Simulador Interactivo](https://hugo4294.github.io/wiki-sistemas-operativos-/simulador.html) • [📌 Reportar Issue](https://github.com/HUgo4294/wiki-sistemas-operativos-/issues)

</div>

---

## Visión General

**Wiki de Sistemas Operativos 1** es una suite educativa integral diseñada para salvar la brecha entre la teoría abstracta de los sistemas operativos y su aplicación práctica. 

El proyecto integra un compendio teórico detallado estructurado bajo el framework **Astro Starlight**, diagramas de arquitectura de bajo nivel y un **Simulador de Planificación de CPU y Gestión de Memoria** integrado directamente en la web. Está orientada a estudiantes e ingenieros de sistemas que buscan dominar los fundamentos internos del kernel, el manejo de recursos y la sincronización de hilos.

---

##  Módulos Educativos

| Unidad | Título | Temas Clave & Enfoque Teórico |
| :---: | :--- | :--- |
| **01** | **Fundamentos & Arquitectura de SO** | • Modos de ejecución (*User/Kernel Mode*).<br>• Arquitecturas Monolíticas vs. Microkernels.<br>• Mecanismos de Interrupciones y Traps.<br>• *System Calls* y abstracción de hardware. |
| **02** | **Gestión de Procesos & Planificación** | • Bloque de Control del Proceso (*PCB*) y *Context Switching*.<br>• Ciclo de vida y diagramas de transición de estados.<br>• Algoritmos de planificación de CPU (*FCFS, SJF, SRTF, Round Robin, Prioridades*).<br>• Solución a la inanición mediante *Aging*. |
| **03** | **Concurrencia & Sincronización** | • Exclusión Mutua y Problema de la Sección Crítica.<br>• Soluciones software (*Algoritmos de Dekker y Peterson*).<br>• Primitivas de sincronización (*Mutex, Semáforos, Monitores*).<br>• Problemas clásicos (*Productor-Consumidor, Lectores-Escritores, Cena de los Filósofos*).<br>• Prevención y detección de Interbloqueos (*Deadlocks*). |

---

## ⚙️ Arquitectura Interna del Sistema Operativo

<div align="center">

<img width="90%" alt="Diagrama del Sistema Operativo" src="https://github.com/user-attachments/assets/6560eab3-5da5-4dbc-a37f-e4f85c38d8dc" />

</div>

La plataforma aborda la interacción entre los cuatro pilares fundamentales administrados por el Kernel:
1. **Planificador de CPU (Scheduler):** Asignación de tiempos de procesamiento y colas de listo/espera.
2. **Administrador de Memoria:** Mapeo de espacio de direcciones, pila (*stack*) y montón (*heap*).
3. **Gestor de Archivos e I/O:** Manejo de descriptores de archivos, buffers y controladores.
4. **Tabla de Procesos:** Control continuo mediante registros de hardware y punteros en el PCB.

---

## 🖥️ Simulador Interactivo de Procesos & Memoria

El simulador incorporado en el proyecto permite experimentar en tiempo real con la abstracción del hardware y los algoritmos de la CPU.

<div align="center">

### [▶️ Abrir Simulador en Vivo](https://hugo4294.github.io/wiki-sistemas-operativos-/simulador.html)

</div>

###  Capacidades Técnicas del Simulador:
* **Creación Dinámica de Procesos:** Definición de PID, tiempo de ráfaga (*burst time*), prioridad y memoria requerida.
* **Visualización de Memoria RAM:** Representación del espacio mapeado y asignación de bloques.
* **Monitoreo de Colas en Tiempo Real:** Seguimiento de estados (*Nuevo, Listo, Ejecución, Bloqueado, Terminado*).
* **Simulación de Planificación:** Ejecución de métricas para calcular *Turnaround Time* (TAT) y *Waiting Time* (WT).

---

##  Stack Tecnológico

* **Frontend & SSG:** [Astro v5](https://astro.build/) (Static Site Generation de ultra alta velocidad).
* **UI Documentation Framework:** [Starlight](https://starlight.astro.build/) (Interfaz clara, i18n ready, búsqueda integrada y modo oscuro/claro automático).
* **Contenido Dinámico:** MDX (Markdown enriquecido con componentes interactivos).
* **Engine del Simulador:** HTML5, CSS3 vanila estructurado y JavaScript síncrono/asíncrono para manipulación del DOM y simulación de ciclos de reloj.
* **DevOps & Hosting:** GitHub Actions (Pipeline para build y deploy automatizado) + GitHub Pages.

---

## 📂 Estructura del Repositorio

```text
wiki-sistemas-operativos/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Pipeline de integración y despliegue continuo (CI/CD)
├── public/                     # Assets estáticos y entrada del simulador
│   ├── fondo.jpg
│   ├── readme-portada.png
│   ├── simulador.html          # Interfaz y motor del simulador standalone
│   └── ...                     # Diagramas e infografías del sistema
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── custom.css      # Reglas CSS personalizadas para Starlight
│   └── content/
│       └── docs/               # Documentación y módulos educativos en MDX
│           ├── index.mdx       # Página principal de la Wiki
│           ├── unidad-1/       # Modos del kernel, System Calls e Interrupciones
│           ├── unidad-2/       # PCB, Scheduler y Algoritmos de Planificación
│           └── unidad-3/       # Sección Crítica, Semáforos y Deadlocks
├── astro.config.mjs            # Configuración de Astro e integración de Starlight
├── package.json                # Dependencias y scripts del proyecto
└── README.md                   # Documentación principal
