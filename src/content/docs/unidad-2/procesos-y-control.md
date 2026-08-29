---
title: Unidad 2 - Definición y Control de Procesos
description: Conceptos de procesos, estados, transiciones y PCB.
---

## 1. Concepto de Proceso vs. Programa

- **Programa:** Es una entidad pasiva. Consiste en un archivo ejecutable almacenado en el disco.
- **Proceso:** Es una entidad activa. Es un programa en estado de ejecución.

## 2. Estados de un Proceso y Transiciones

Un proceso cambia de estado a medida que se ejecuta:

1. **Nuevo (New):** El proceso se está creando e ingresando a la memoria.
2. **Listo (Ready):** El proceso está cargado en RAM y espera tiempo de CPU.
3. **Ejecución (Running):** Las instrucciones se están procesando en la CPU.
4. **Bloqueado / Espera (Waiting/Blocked):** Esperando un evento (E/S).
5. **Terminado (Terminated):** El proceso ha finalizado.

## 3. Bloque de Control de Proceso (PCB)

El PCB es la estructura de datos del kernel que representa a un proceso individual.

## 4. Simulador Interactivo

[🗗 Abrir Simulador a Pantalla Completa](/simulador.html)