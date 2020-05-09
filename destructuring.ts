const mountain = {height: 15000, destination: 'Kashmir', color: 'Green'}

// Destructure an object
let { height, destination, color } = mountain

console.log(height, destination, color);

// Change value
mountain.height = 16000;

// Update object. Reuse the existing variables
({height, destination, color} = mountain)

console.log(height, destination, color);

// Deep data
const house = { coffeeMachine: { size: 24 } }
// Destructuring of the deep data
const {coffeeMachine: {size}} = house
console.log(size);
console.log(house.coffeeMachine.size === size)


const plants = ['Rubber Plant', 'Snake Plant', 'Parlour Palm', 'Peace Lilly']

const [rubber, snake, ...remaining] = plants
console.log(rubber, snake, remaining);

