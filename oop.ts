class Rectangle {
  // width: number;
  height: number;

  constructor(w: number, h: number) {
    this.width = w;
    this.height = h;
  }

  get width() {
    return this.width;
  }

  set width(w: number) {
    if (w > 0) {
      this.width = w;
    }
  }

  calcArea() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(10, 20);

// Object.defineProperty(rectangle, 'calcArea', function() {

// })
// rectangle.width = "ddfd";
rectangle.calcArea();
rectangle.width = 7;

class Pot {
  power: number;
  brand: string;
  color: string;

  constructor(power, brand, color) {
    this.power = power;
    this.brand = brand;
    this.color = color;
  }

  private _startEngine(quantity) {
    return quantity / this.power;
  }

  public on(quantity: number) {
    this._startEngine(quantity);
  }

  static brands() {
    return ["Toshiba", "Tefal"];
  }
}

const pot1 = new Pot(300, "Toshiba", "white");
const pot2 = new Pot(600, "Tefal", "red");
pot1.on(300);

Pot.brands();

class Person {
  age: number;
  name: string;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greetings() {
    console.log(`Hi, I'm a ${this.name}`);
  }
}

const Vasya = new Person("Vasya", 28);

class Employee extends Person {
  inn: number;
  snils: number;

  constructor(name, age, inn, snils) {
    super(name, age);
    this.inn = inn;
    this.snils = snils;
  }

  greetings() {
    console.log(`Hi, I'm a ${this.name}. I have inn ${this.inn}`);
  }
}

const Alex = new Employee("Alex", 27, 123, 876);

class Developer extends Employee {
  lang: string;
  team: string;
  bugs: number;
  salary: number;

  constructor(name, age, inn, snils, lang, team, bugs, salary) {
    super(name, age, inn, snils);
    this.lang = lang;
    this.team = team;
    this.bugs = bugs;
    this.salary = salary;
  }

  // greetings() {
  //   console.log(
  //     `Hi, I'm a ${this.name}. I'm working as ${this.lang} developer`
  //   );
  // }

  toString() {}
}

const Nikita = new Developer("Nikita", 25, 752, 323, "python", "r462", 2, 300);
Nikita.toString();
Alex.toString();

const arr = [Vasya, Alex, Nikita];
arr.forEach((item) => {
  item.greetings();
});

// class Calc {
//   sum(x: number, y: number) {
//     return x + y;
//   }

//   sum(x: string, y: string) {
//     return x + y;
//   }
// }

class Engine {}

class Wheel {}

class Freshener {}

class Car {
  engine: Engine;
  wheels: Wheel[];
  freshener: Freshener;

  constructor(freshener: Freshener) {
    this.engine = new Engine();
    const wheel = new Wheel();
    this.wheels.push(wheel);
    this.wheels.push(wheel);
    this.wheels.push(wheel);
    this.wheels.push(wheel);
    this.freshener = freshener;
  }
}

const freshener = new Freshener();
const car = new Car(freshener);

class Component {
  render() {}

  private _insideLogic() {}

  componentDidMount() {
    this._insideLogic();
  }
}

class MyComponent extends Component {}
