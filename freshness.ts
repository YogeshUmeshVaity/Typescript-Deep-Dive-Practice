/**
 * The concept of Freshness is also called 'Strict Object Literal Checking'. The reason why only
 * object literals are type checked this way is because in this case additional properties that
 * aren't actually used is almost always a typo or a misunderstanding of the API.
 */
function logName(something: { name: string }) {
    console.log(something.name)
}

const animal = { name: 'Cat', color: 'Golden' }
const person = { name: 'Sandy', skill: 'DOP' }

logName(animal)
logName(person)
// logName({name: 'Crow', nativeArea: 'Manhattan'})       // Error when a literal is passed