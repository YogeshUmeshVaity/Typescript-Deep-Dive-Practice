const mountain = {height: 15000, destination: 'Kashmir', color: 'Green'}

// Destructure an object
let { height, destination, color } = mountain

console.log(height, destination, color);

// Change value
mountain.height = 16000;

// Update object
({height, destination, color} = mountain)

console.log(height, destination, color);

