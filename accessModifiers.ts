class Bird {
    public name: string
    private age: number
    protected color: string     // Can be accessed only from extended class.
    constructor(name: string, age: number, color: string) {
        this.name = name
        this.age = age
        this.color = color
    }
}

const bird1 = new Bird('Chiu', 1, 'Brown')
console.log(bird1.name);
// console.log(bird1.age);      // Cannot be accessed since private
// console.log(bird1.color);    // Cannot be accessed directly from object.



class Crow extends Bird {
    getAge() {
        // return this.age      /* Cannot be accessed
    }

    getName() {
        return this.name
    }

    getColor() {
        return this.color       // Allowed to access from extended class.
    }
}