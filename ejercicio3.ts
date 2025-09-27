import * as readline from "readline";

/** Mediator interface */
interface Mediator {
  notify(sender: User, mensaje: string): void;
}

/** Concrete Mediator */
class ConcreteMediator implements Mediator {
  private userManager: UserManager;

  constructor(userManager: UserManager) {
    this.userManager = userManager;
  }

  public notify(sender: User, mensaje: string): void {
    const users = this.userManager.getUsers();

    if (!users.includes(sender.getName())) {
      console.log(`El remitente "${sender.getName()}" no existe.`);
      return;
    }

    console.log(`\n[${sender.getName()}]: "${mensaje}"`);

    const recipients = this.userManager
      .getAllUserObjects()
      .filter((u) => u.getName() !== sender.getName());

    if (recipients.length === 0) {
      console.log(
        "Solo estás tú en el group chat, Agrega mas personas para iniciar una conversacion"
      );
    } else {
      recipients.forEach((u) => {
        console.log(`   -> ${u.getName()} recibió el mensaje.`);
      });
    }
  }
}

/** Base Component */
class BaseComponent {
  protected mediator!: Mediator;

  public setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }
}

/** User Component */
class User extends BaseComponent {
  private name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public sendMessage(mensaje: string) {
    this.mediator.notify(this, mensaje);
  }
}

/** UserManager */
class UserManager {
  private users: User[] = [];

  public crearUsuario(nombre: string, mediator?: Mediator) {
    if (this.users.find((u) => u.getName() === nombre)) {
      console.log(`Usuario "${nombre}" ya existe.`);
      return;
    }
    const user = new User(nombre);

    if (mediator) {
      user.setMediator(mediator);
    }

    this.users.push(user);
    console.log(`Usuario "${nombre}" creado.`);
  }

  public borrarUsuario(nombre: string) {
    const index = this.users.findIndex((u) => u.getName() === nombre);
    if (index >= 0) {
      this.users.splice(index, 1);
      console.log(`Usuario "${nombre}" borrado.`);
    } else {
      console.log(`Usuario "${nombre}" no existe.`);
    }
  }

  public listarUsuarios() {
    if (this.users.length === 0) {
      console.log("No hay usuarios registrados.");
      return;
    }
    console.log("Usuarios actuales:");
    this.users.forEach((u, i) => console.log(`${i + 1}. ${u.getName()}`));
  }

  public getUsers(): string[] {
    return this.users.map((u) => u.getName());
  }

  public getUserByName(nombre: string): User | undefined {
    return this.users.find((u) => u.getName() === nombre);
  }

  public getAllUserObjects(): User[] {
    return this.users;
  }
}

// Instancia del UserManager y Mediator
const userManager = new UserManager();
const mediator = new ConcreteMediator(userManager);

// Menú con readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log("\n=== Main Menu ===");
  console.log("1. Agregar usuario");
  console.log("2. Borrar Usuario");
  console.log("3. Listar Usuarios");
  console.log("4. Enviar Mensaje");
  console.log("0. Exit");
  rl.question("Choose an option: ", handleMenu);
}

function handleMenu(choice: string) {
  switch (choice.trim()) {
    case "1":
      rl.question("Nombre del nuevo usuario: ", (nombre) => {
        userManager.crearUsuario(nombre.trim(), mediator);

        showMenu();
      });
      return;
    case "2":
      rl.question("Nombre del usuario a borrar: ", (nombre) => {
        userManager.borrarUsuario(nombre.trim());
        showMenu();
      });
      return;
    case "3":
      userManager.listarUsuarios();
      break;
    case "4":
      rl.question("Nombre del remitente: ", (remitente) => {
        const sender = userManager.getUserByName(remitente.trim());
        if (!sender) {
          console.log(`El remitente "${remitente}" no existe.`);
          showMenu();
          return;
        }

        rl.question("Ingrese mensaje: ", (mensaje) => {
          sender.sendMessage(mensaje.trim());
          showMenu();
        });
      });
      return;
    case "0":
      console.log("Adiós!");
      rl.close();
      return;
    default:
      console.log("Opción inválida.");
  }
  showMenu();
}

showMenu();
