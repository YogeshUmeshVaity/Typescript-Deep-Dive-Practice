class Person {
    name: string
    age: number
    height: string
    constructor(name: string, age: number, height: string) {
        this.name = name
        this.age = age
        this.height = height
    }
}

class Student extends Person {
    id: number
    constructor(name: string, age: number, height: string, id: number) {
        super(name, age, height)
        this.id = id
    }
}

const person1 = new Person('John', 27, '5')
console.log(person1);

const student1 = new Student('Jane', 24, '4.5', 51)
console.log(student1);