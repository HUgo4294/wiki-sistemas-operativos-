<div align="center">

<img width="2172" height="724" alt="Wiki de Sistemas Operativos 1" src="https://github.com/user-attachments/assets/3c429e21-c1b5-4ec8-9d43-ecea2cb645a6" />

<br>

# 💻 Wiki de Sistemas Operativos 1

### Plataforma educativa sobre procesos, memoria, concurrencia y planificación de CPU

[![Astro](https://img.shields.io/badge/Astro-5C2D91?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Starlight](https://img.shields.io/badge/Starlight-111827?style=for-the-badge&logo=astro&logoColor=white)](https://starlight.astro.build/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://hugo4294.github.io/wiki-sistemas-operativos-/)
![Estado](https://img.shields.io/badge/Estado-Publicado-16A34A?style=for-the-badge)

<br>

## [      Abrir Wiki de Sistemas Operativos](https://hugo4294.github.io/wiki-sistemas-operativos-/)

</div>

---

## 📖 Descripción

**Wiki de Sistemas Operativos 1** es una plataforma educativa desarrollada para presentar los principales fundamentos de los sistemas operativos de forma clara, visual y organizada.

El proyecto combina contenido teórico, ejemplos, diagramas, tablas comparativas y un simulador interactivo para facilitar el aprendizaje.

---

## 📚 Contenido

| Unidad | Tema | Contenido principal |
|:---:|---|---|
| **01** | Introducción a los Sistemas Operativos | Historia, funciones, kernel, memoria, llamadas al sistema e interrupciones. |
| **02** | Definición y Control de Procesos | Estados, PCB, PID, hilos, cambio de contexto y planificación de CPU. |
| **03** | Concurrencia | Sección crítica, exclusión mutua, Peterson, Dekker, mutex, semáforos y monitores. |

### 📘 Unidad 1: Introducción

- Concepto de sistema operativo.
- Historia y evolución.
- Funciones principales.
- Kernel.
- Gestión de procesos y memoria.
- Sistemas de archivos.
- Dispositivos de entrada y salida.
- Llamadas al sistema.
- Interrupciones.
- Modos usuario y kernel.
- Arquitectura de los sistemas operativos.

### ⚙️ Unidad 2: Procesos y Control

- Diferencia entre programa y proceso.
- Ciclo de vida de los procesos.
- Estados de los procesos.
- PCB y PID.
- Planificador o scheduler.
- Cambio de contexto.
- Hilos y colas de procesos.
- FCFS, SJF, SRTF y Round Robin.
- Planificación por prioridades.
- Aging.

### 🔄 Unidad 3: Concurrencia

- Concurrencia y paralelismo.
- Procesos e hilos concurrentes.
- Recursos compartidos.
- Condiciones de carrera.
- Sección crítica.
- Exclusión mutua.
- Algoritmos de Dekker y Peterson.
- Mutex, semáforos y monitores.
- Productor-consumidor.
- Lectores y escritores.
- Comunicación entre procesos.
- Inanición e interbloqueo.

---

## 🧠 Funcionamiento de un Sistema Operativo

<div align="center">

<img width="1942" height="809" alt="Procesos, CPU, memoria y archivos" src="https://github.com/user-attachments/assets/6560eab3-5da5-4dbc-a37f-e4f85c38d8dc" />

</div>

El sistema operativo coordina los procesos, la memoria RAM, los archivos, los dispositivos y el tiempo de CPU. La Wiki utiliza representaciones visuales para explicar cómo se relacionan estos componentes.

---

## 🖥️ Simulador de Procesos

La Unidad 2 incluye un simulador interactivo para observar cómo el sistema operativo administra los procesos y los recursos disponibles.

### Funciones del simulador

- Creación y visualización de procesos.
- Administración de memoria RAM.
- Representación de estados.
- Ejecución y seguimiento del progreso.
- Simulación de planificación de CPU.
- Visualización de colas de procesos.

<div align="center">

### [▶️ Abrir el simulador](https://hugo4294.github.io/wiki-sistemas-operativos-/simulador.html)

</div>

---

## ✨ Características

- Interfaz moderna y adaptable.
- Navegación organizada por unidades.
- Buscador integrado.
- Modo claro y modo oscuro.
- Diagramas y recursos gráficos.
- Contenido desarrollado con MDX.
- Simulador interactivo.
- Publicación automática con GitHub Actions.
- Alojamiento público mediante GitHub Pages.

---

## 🛠️ Tecnologías

| Tecnología | Función |
|---|---|
| **Astro** | Construcción y generación del sitio. |
| **Starlight** | Documentación, navegación y buscador. |
| **Markdown / MDX** | Creación del contenido educativo. |
| **HTML** | Estructura del simulador. |
| **CSS** | Diseño visual personalizado. |
| **JavaScript** | Funcionamiento interactivo. |
| **Git y GitHub** | Control de versiones y repositorio. |
| **GitHub Actions** | Publicación automática. |
| **GitHub Pages** | Alojamiento de la Wiki. |

---

## 📂 Estructura del proyecto

<details>
<summary><strong>Ver estructura de carpetas</strong></summary>

```text
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
│   │
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
```

</details>

---

##   Instalación y ejecución local

### Requisitos

- Node.js 18 o una versión posterior.
- npm.
- Git.

### Descargar el proyecto

```bash
git clone https://github.com/HUgo4294/wiki-sistemas-operativos-.git
```

### Entrar en la carpeta

```bash
cd wiki-sistemas-operativos-
```

### Instalar las dependencias

```bash
npm install
```

### Ejecutar el servidor local

```bash
npm run dev
```

---

## 🌐 Página publicada

La Wiki está disponible públicamente mediante GitHub Pages:

<div align="center">

### 🔗 [hugo4294.github.io/wiki-sistemas-operativos-](https://hugo4294.github.io/wiki-sistemas-operativos-/)

</div>

---

## 👨‍💻 Autor

Desarrollado por **Hugo4294** como proyecto educativo para el curso de **Sistemas Operativos 1**.

<div align="center">

Si este proyecto te resulta útil, puedes apoyar el repositorio con una ⭐

</div>
