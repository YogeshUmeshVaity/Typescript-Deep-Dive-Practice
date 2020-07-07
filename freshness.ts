/**
 * The concept of Freshness is also called 'Strict Object Literal Checking'. The reason why only
 * object literals are type checked this way is because in this case additional properties that
 * aren't actually used is almost always a typo or a misunderstanding of the API.
 */
function logNameStrict(something: { name: string }) {
    console.log(something.name)
}

const animal = { name: 'Cat', color: 'Golden' }
export const person = { name: 'Sandy', skill: 'DOP' }

logNameStrict(animal)
logNameStrict(person)
// logNameStrict({name: 'Crow', nativeArea: 'Manhattan'})       // Error when a literal is passed


/**
 * A type can include an index signature to explicitly indicate that the excess properties are
 * permitted.
 */
function logNameAllow(something: { name: string, [index: string]: any}) {
    console.log(something.name)
}

logNameAllow(animal)
logNameAllow(person)
logNameAllow({name: 'Crow', nativeArea: 'Manhattan'})       // No Error when a literal is passed