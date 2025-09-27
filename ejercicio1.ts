// Ejercicio 1 - Builder

class Car {
  readonly engineType: string;
  readonly color: string;
  readonly wheels: string;
  readonly soundSystem: string;
  readonly interior: string;
  readonly sunroof: boolean;
  readonly gps: boolean;

  constructor(builder: CarBuilder) {
    this.engineType = builder.engineType;
    this.color = builder.color;
    this.wheels = builder.wheels;
    this.soundSystem = builder.soundSystem;
    this.interior = builder.interior;
    this.sunroof = builder.sunroof;
    this.gps = builder.gps;
  }

  toString(): string {
    return `Car(engine=${this.engineType}, color=${this.color}, wheels=${this.wheels}, 
      soundSystem=${this.soundSystem}, interior=${this.interior}, 
      sunroof=${this.sunroof}, gps=${this.gps})`;
  }
}

class CarBuilder {
  engineType: string = "gasoline";
  color: string = "white";
  wheels: string = "standard";
  soundSystem: string = "basic";
  interior: string = "cloth";
  sunroof: boolean = false;
  gps: boolean = false;

  setEngineType(engineType: string): CarBuilder {
    this.engineType = engineType;
    return this;
  }

  setColor(color: string): CarBuilder {
    this.color = color;
    return this;
  }

  setWheels(wheels: string): CarBuilder {
    this.wheels = wheels;
    return this;
  }

  setSoundSystem(soundSystem: string): CarBuilder {
    this.soundSystem = soundSystem;
    return this;
  }

  setInterior(interior: string): CarBuilder {
    this.interior = interior;
    return this;
  }

  setSunroof(sunroof: boolean): CarBuilder {
    this.sunroof = sunroof;
    return this;
  }

  setGps(gps: boolean): CarBuilder {
    this.gps = gps;
    return this;
  }

  build(): Car {
    return new Car(this);
  }
}

// Ejemplo de uso
const myCar = new CarBuilder()
  .setEngineType("electric")
  .setColor("midnight blue")
  .setWheels("18-inch alloy")
  .setSoundSystem("premium audio")
  .setInterior("leather")
  .setSunroof(true)
  .setGps(true)
  .build();

console.log(myCar.toString());
