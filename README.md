# Trabajo K8S – Patrones de Diseño  
Este repositorio contiene la solución a los **3 ejercicios** solicitados.  
Cada ejercicio incluye:
- Identificación del tipo de patrón
- Selección del patrón aplicado
- Diagrama de clases (PlantUML)
- Código de implementación en TypeScript

---

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
