interface Platform {
    display(title: string, message: string): void;
}

class WebPlatform implements Platform {
    display(title: string, message: string): void {
        console.log(`[WEB] ${title}: ${message}`);
    }
}

class MobilePlatform implements Platform {
    display(title: string, message: string): void {
        console.log(`[MOBILE] ${title}: ${message}`);
    }
}

class DesktopPlatform implements Platform {
    display(title: string, message: string): void {
        console.log(`[DESKTOP] ${title}: ${message}`);
    }
}

// Clase base (renombrada)
abstract class AppNotification {
    protected platform: Platform;

    constructor(platform: Platform) {
        this.platform = platform;
    }

    setPlatform(platform: Platform) {
        this.platform = platform;
    }

    abstract send(title: string, message: string): void;
}

// Tipos de notificaciones
class MessageNotification extends AppNotification {
    send(title: string, message: string): void {
        this.platform.display(`Mensaje - ${title}`, message);
    }
}

class AlertNotification extends AppNotification {
    send(title: string, message: string): void {
        this.platform.display(`ALERTA - ${title}`, message.toUpperCase());
    }
}

class WarningNotification extends AppNotification {
    send(title: string, message: string): void {
        this.platform.display(`ADVERTENCIA - ${title}`, `⚠️ ${message}`);
    }
}

class ConfirmationNotification extends AppNotification {
    send(title: string, message: string): void {
        this.platform.display(`Confirmación - ${title}`, `✔️ ${message}`);
    }
}

// Ejemplo de uso
const web = new WebPlatform();
const mobile = new MobilePlatform();
const desktop = new DesktopPlatform();

const alertWeb = new AlertNotification(web);
alertWeb.send("Sistema", "Se detectó actividad sospechosa");

const msgMobile = new MessageNotification(mobile);
msgMobile.send("Juan", "Tienes un nuevo mensaje");

const warningDesktop = new WarningNotification(desktop);
warningDesktop.send("Memoria", "Uso alto de CPU");

msgMobile.setPlatform(web);
msgMobile.send("Cambio", "Ahora este mensaje va a Web");
