class Person {
    constructor(
        public name: 
        string, 
        public age: number, 
        public height: string
        ) {}
}

class Student extends Person {
    constructor(
        public name: string,
        public age: number,
        public height: string,
        public id: number
    ) { super(name, age, height)}
}

const person1 = new Person('John', 27, '5')
console.log(person1)

const student1 = new Student('Jane', 24, '4.5', 51)
console.log(student1)