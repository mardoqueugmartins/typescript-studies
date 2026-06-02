interface PersonInterface {
    id: number;
    name: string;
    age: number;
    sayHello(): string;
    sayMyName(): string;
}


class Person implements PersonInterface {
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName(): string {
        return `My name is ${this.name}`;
    }
    sayHello(): string {
        return 'Hello';
    }
}

interface EmployeeInterface {
    salary: number;
    sayMySalary?(): number;
}

class Employee extends Person implements EmployeeInterface {
    salary: number;
    constructor(id: number, name: string, age: number, salary: number) {
        super(id, name, age);
        this.salary = salary;
    }
    sayMySalary(): number {
        return this.salary;
    }
}

const person = new Person(1, 'Mardoqueu', 30)



export {}