interface Person {
  name: string
  age: number
  location: string
}

type SomeNewType = keyof Person

let newTypeObject: SomeNewType
newTypeObject = "name"
newTypeObject = "age"
newTypeObject = "location"

// Error: Type '"anyOtherString"' is not assignable to type '"name" | "age" | "location"'
// newTypeObject = "anyOtherString"

let anotherTypeObject: "rollno" | "marks" | "classNumber"

anotherTypeObject = "rollno"
// anotherTypeObject = "AnythingElse"   // Error

type Greeting = "Hello" | "Hi" | "Welcome"

let greeting: Greeting
greeting = "Hello"
greeting = "Hi"
greeting = "Welcome"
// greeting = "GoodEvening"     // Error

const bmwCar = { name: "BMW", power: "1000hp" }
type CarLiteralType = keyof typeof bmwCar

let carPropertyLiteral: CarLiteralType
carPropertyLiteral = "name"
carPropertyLiteral = "power"
// carPropertyLiteral = "anyOther"     // Error

// console.log(typeof someObject)

const someString = "Hello"
console.log(typeof someString)

enum ColorsEnum {
    white = '#ffffff',
    black = '#000000',
}

type Colors = keyof typeof ColorsEnum;

let colorLiteral: Colors
colorLiteral = "white"  // OK
colorLiteral = "black"  // OK
// colorLiteral = "red"    // Error...
