---
title: Unidad 2 - Definición y Control de Procesos
description: Abstracción de procesos, estructuras de control PCB, cambio de contexto y planificación.
---

## 1. Concepto de Proceso vs. Programa

* **Programa:** Es una entidad **pasiva**. Consiste en un archivo ejecutable almacenado en el disco que contiene una secuencia de instrucciones codificadas en lenguaje máquina.
* **Proceso:** Es una entidad **activa**. Es un programa en estado de ejecución que incluye el contador de programa (*Program Counter*), registros de la CPU, pila de llamadas y un espacio de direcciones en memoria asignado.

---

## 2. Estados de un Proceso y Transiciones

Un proceso cambia de estado a medida que se ejecuta. El ciclo de vida clásico consta de 5 estados:

1. **Nuevo (New):** El proceso se está creando e ingresando a la memoria.
2. **Listo (Ready):** El proceso está cargado en RAM y espera asignación de tiempo de CPU.
3. **Ejecución (Running):** Las instrucciones del proceso se están procesando en la CPU.
4. **Bloqueado / Espera (Waiting/Blocked):** El proceso no puede ejecutar hasta que ocurra un evento (p. ej., completar una lectura de disco).
5. **Terminado (Terminated):** El proceso ha finalizado su ejecución y sus recursos son liberados por el SO.

---

## 3. Bloque de Control de Proceso (PCB)

El **PCB** (*Process Control Block*) es la estructura de datos crítica del kernel que representa a un proceso individual en el sistema operativo.

```c
// Representación simplificada del PCB inspirada en el kernel de Linux
struct ProcessControlBlock {
    int pid;                    // Identificador único del proceso
    enum ProcessState state;    // Estado actual (READY, RUNNING, BLOCKED)
    unsigned int pc;            // Program Counter (próxima instrucción)
    int cpu_registers[16];      // Contenido de los registros del procesador
    void *memory_limits;        // Información del mapa de memoria (Base y Límite)
    int open_files_descriptors[32]; // Tabla de archivos abiertos por el proceso
    struct Priority priority;   // Prioridad asignada para el planificador
};