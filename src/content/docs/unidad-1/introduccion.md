---
title: Unidad 1 - Introducción a los Sistemas Operativos
description: Conceptos fundamentales, arquitectura, llamadas al sistema y gestión de recursos.
---

## 1. ¿Qué es un Sistema Operativo?

Un **Sistema Operativo (SO)** es el software fundamental que gestiona el hardware de una computadora y proporciona servicios esenciales a los programas de aplicación. Actúa como un intermediario o interfaz entre el usuario y la máquina.

<div style="text-align: center; margin: 25px 0;">
  <img 
    src="/esquema-so.png"   
    alt="Ubicación del Sistema Operativo entre Hardware y Usuario" 
    style="border-radius: 8px; border: 1px solid #334155; width: 100%; max-width: 550px; background: #ffffff; padding: 10px;"
  />
 

---

## 2. Objetivos y Funciones Principales

Los objetivos fundamentales de un sistema operativo son tres:
1. **Comodidad:** Hacer que el sistema informático sea más fácil y amigable de usar.
2. **Eficiencia:** Permitir que los recursos del sistema (CPU, memoria, disco) se utilicen de la forma más óptima posible.
3. **Capacidad de evolución:** Permitir el desarrollo y prueba de nuevas funciones del sistema sin interferir con los servicios existentes.

### Principales Funciones del Kernel (Núcleo):
* **Gestión de Procesos:** Creación, planificación, sincronización y finalización de procesos.
* **Gestión de Memoria Principal:** Seguimiento de los bloques de memoria asignados y libres en la RAM.
* **Gestión de Almacenamiento (Archivos):** Abstracción de medios físicos (HDD, SSD) en directorios y archivos.
* **Gestión de Entrada/Salida (E/S):** Control de periféricos mediante controladores de dispositivos (*drivers*).

---

## 3. Modos de Operación de la CPU

Para garantizar la seguridad y estabilidad del sistema, los procesadores modernos implementan al menos dos modos de ejecución:

| Modo de Ejecución | Nivel de Privilegio | Descripción |
| :--- | :--- | :--- |
| **Modo Usuario (*User Mode*)** | Limitado | Se ejecutan las aplicaciones estándar. No tienen acceso directo al hardware. |
| **Modo Kernel (*Kernel Mode*)** | Total / Privilegiado | Se ejecuta el núcleo del SO. Tiene control absoluto del procesador y periferia. |

---

## 4. Llamadas al Sistema (*System Calls*)

Las **Llamadas al Sistema** son el mecanismo o interfaz mediante el cual un programa en modo usuario solicita un servicio al núcleo del sistema operativo.

<div style="text-align: center; margin: 25px 0;">
  <img 
    src="/kenel.jpg" 
    alt="Flujo de una Llamada al Sistema entre Modo Usuario y Modo Kernel" 
    style="border-radius: 8px; border: 1px solid #334155; width: 100%; max-width: 600px; background: #ffffff; padding: 10px;"
  />
  <p style="font-size: 0.85em; color: #94a3b8; margin-top: 8px;"><em>Transición de Modo Usuario a Modo Kernel mediante una llamada al sistema.</em></p>
</div>

### Ejemplos de System Calls en POSIX / Linux:
* **Manejo de Procesos:** `fork()`, `execve()`, `exit()`, `wait()`
* **Manejo de Archivos:** `open()`, `read()`, `write()`, `close()`
* **Información del Sistema:** `getpid()`, `time()`, `uname()`

---

## 5. Estructura y Arquitecturas del Kernel

Existen diferentes filosofías de diseño para la estructura interna del sistema operativo:

1. **Monolítico:** Todo el sistema operativo (gestor de procesos, memoria, drivers) se ejecuta en un único espacio de direcciones en modo kernel (p. ej., Linux, Windows NT).
2. **Microkernel:** Mantiene en modo kernel únicamente lo estrictamente necesario (gestión básica de memoria, procesos y comunicación IPC). Los drivers y sistemas de archivos corren en modo usuario.
3. **Híbrido:** Combina la velocidad de los núcleos monolíticos con la modularidad de los micronúcleos.

---

:::tip[Resumen de la Unidad]
El Sistema Operativo oculta la complejidad del hardware mediante capas de abstracción. Las aplicaciones interactúan con él usando **System Calls**, provocando un cambio de modo de ejecución de la CPU (*Modo Usuario* a *Modo Kernel*).
:::