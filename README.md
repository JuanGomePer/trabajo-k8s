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
PlantUML:
```plantuml
@startuml
title Diagrama de clases - Patrón Bridge (Notificaciones)

interface Platform {
  +display(title: String, message: String)
}

class WebPlatform
class MobilePlatform
class DesktopPlatform

abstract class AppNotification {
  -platform: Platform
  +setPlatform(platform: Platform)
  +send(title: String, message: String)
}

class MessageNotification
class AlertNotification
class WarningNotification
class ConfirmationNotification

Platform <|.. WebPlatform
Platform <|.. MobilePlatform
Platform <|.. DesktopPlatform

AppNotification o--> Platform
AppNotification <|-- MessageNotification
AppNotification <|-- AlertNotification
AppNotification <|-- WarningNotification
AppNotification <|-- ConfirmationNotification
@enduml
