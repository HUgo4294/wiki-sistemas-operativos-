---
title: Unidad 1 - Introducción a los Sistemas Operativos
description: Conceptos fundamentales, evolución histórica, llamadas al sistema (System Calls) y protección en modo dual.
---

## 1. Definición y Rol del Sistema Operativo

Un **Sistema Operativo (SO)** es el programa fundamental de software que actúa como intermediario entre el hardware físico de un ordenador y las aplicaciones de usuario. Su objetivo principal es abstraer la complejidad del hardware y proporcionar un entorno seguro, eficiente y gestionado para la ejecución de programas.

### El SO como Gestor de Recursos
El sistema operativo actúa como un administrador de los recursos finitos del sistema:
* **Procesador (CPU):** Asigna tiempo de ejecución a cada proceso mediante algoritmos de planificación.
* **Memoria Principal (RAM):** Controla qué partes de la memoria están en uso, por quién, y asigna/libera espacio dinámicamente.
* **Dispositivos de E/S:** Gestiona los controladores (drivers), buffers y acceso a periféricos como discos, interfaces de red y teclados.
* **Almacenamiento Secundario:** Modela las estructuras lógicas de archivos y directorios sobre bloques físicos de disco.

### El SO como Máquina Virtual (Abstracción)
El hardware real opera con señales electrónicas, interrupciones y registros de bajo nivel. El SO oculta esta complejidad transformando la arquitectura física en una **máquina virtual limpia y fácil de programar** mediante capas de abstracción.

---

## 2. Evolución Histórica de los Sistemas Operativos

1. **Monitores Residentes (Sistemas por Lotes / Batch):** Ejecutaban secuencias de trabajos sin interacción directa del usuario. Reducían el tiempo de preparación de la máquina.
2. **Multiprogramación:** Permitió mantener varios programas en RAM simultáneamente. Cuando un trabajo esperaba E/S, la CPU pasaba a ejecutar otro, incrementando la utilización del procesador.
3. **Tiempo Compartido (Time-Sharing):** Extensión de la multiprogramación donde la CPU se conmuta tan rápido entre usuarios que da la ilusión de acceso dedicado e interactivo.
4. **Sistemas Distribuidos e Incrustados:** Coordinación de múltiples procesadores autónomos conectados por red y sistemas de tiempo real restringidos por latencias críticas.

---

## 3. Llamadas al Sistema (System Calls) y Protección

Las **Llamadas al Sistema (System Calls)** son la interfaz estándar por la cual un programa de usuario solicita un servicio gestionado directamente por el kernel del sistema operativo (p. ej., leer un archivo, crear un proceso o enviar paquetes de red).

### Arquitectura de Modo Dual (Dual-Mode Operation)

Para evitar que una aplicación errónea o maliciosa corrompa el sistema o acceda directamente al hardware, la CPU implementa al menos dos modos de ejecución diferenciados mediante un bit de modo (*mode bit*):

* **Modo Usuario (User Mode - Bit 1):** Ejecución restringida. Las instrucciones privileged están prohibidas y generan una excepción (*trap*).
* **Modo Kernel / Supervisor (Kernel Mode - Bit 0):** Acceso total a todas las instrucciones de la CPU y a la totalidad del mapa de memoria física.

### Ejemplo Práctico en Lenguaje C (POSIX System Call)

```c
#include <stdio.h>
#include <unistd.h>
#include <fcntl.h>

int main() {
    // La función open() invoca internamente la llamada al sistema sys_open en el Kernel
    int fd = open("ejemplo.txt", O_CREAT | O_WRONLY, 0644);
    
    if (fd < 0) {
        perror("Error al invocar la system call open");
        return 1;
    }
    
    // System call write() para escribir bytes directamente al buffer del kernel
    write(fd, "Hola desde el modo Kernel!\n", 27);
    
    // Liberación del descriptor de archivo
    close(fd);
    return 0;
}
