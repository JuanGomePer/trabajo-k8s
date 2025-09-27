# Trabajo K8S – Patrones de Diseño  
Este repositorio contiene la solución a los **3 ejercicios** solicitados.  
Cada ejercicio incluye:
- Identificación del tipo de patrón
- Selección del patrón aplicado
- Diagrama de clases (PlantUML)
- Código de implementación en TypeScript

---
# Proyecto TypeScript - Scripts

Este proyecto utiliza **TypeScript** y **ts-node** para ejecutar los archivos `.ts` directamente desde la línea de comandos.

## Requisitos

- Tener instalado **Node.js** (v14 o superior recomendado).  
- Tener instalado **TypeScript** y **ts-node** globalmente:

```bash
npm install -g typescript ts-node

```

## Cómo ejecutarlos

```bash

# Ejecutar ejercicio1.ts
npm run start1

# Ejecutar ejercicio2.ts
npm run start2

# Ejecutar ejercicio3.ts
npm run start3

```


## Ejercicio 1
> *(Espacio reservado para el primer ejercicio)*  
- **Tipo de patrón:**  
- **Patrón aplicado:**  
- **Diagrama de clases:**  

**FOTO UML EJERCICIO 1**

- **Notas de implementación:**  
- Pendiente

---

## Ejercicio 2 – Notificaciones Multiplataforma  
### Descripción
Aplicación que gestiona la visualización de notificaciones en diferentes plataformas (escritorio, móvil, web) y diferentes tipos (mensaje, alerta, advertencia, confirmación), evitando la explosión de subclases.

### Tipo de patrón
Estructural

### Patrón aplicado
**Bridge**  
Permite desacoplar la abstracción (`AppNotification`) de su implementación (`Platform`), facilitando la combinación flexible de tipos de notificación y plataformas.

### Diagrama de clases
<img width="1259" height="436" alt="image" src="https://github.com/user-attachments/assets/42120ae7-fc99-4fb0-abbe-335eebd6f16b" />

---

## Ejercicio 3
### Descripción
Aplicación de chat grupal que permite crear, eliminar y listar usuarios, y enviar mensajes entre ellos mediante un **Mediator**, centralizando la comunicación para evitar dependencias directas. Esto facilita el mantenimiento y escalabilidad, reduce la complejidad de las interacciones y mantiene la lógica de comunicación organizada.

### Tipo de patrón
**Comportamiento**: Debido a que gestiona cómo los objetos interactúan y se comunican entre sí sin que haya acoplamiento fuerte.
### Patrón aplicado
**Mediator**  
Permite centralizar la comunicación en un único objeto y hace que los usuarios no necesitan conocer a todos los demás, solo al mediador.
### Diagrama de clases
<img width="675" height="624" alt="image" src="https://github.com/user-attachments/assets/266e0105-c288-4270-acdf-7c1e5d8eaddd" />





- **Notas de implementación:**  
- Pendiente

---
