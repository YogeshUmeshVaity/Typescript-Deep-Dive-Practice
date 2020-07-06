/** Utility function to create a K:V from a list of strings */
function strEnum<T extends string>(stringList: Array<T>): { [K in T]: K } {
  return stringList.reduce((resultObject, propertyName) => {
    // Adds the keys(properties) and their values to the result object.
    resultObject[propertyName] = propertyName      
    return resultObject
  }, Object.create(null))
}

/** Create a Key:Value object */
const Direction = strEnum(["North", "South", "East", "West"])
console.log(Direction)

/**
 * Generate literal type union using keyof typeof.
 * The 'typeof' operator gives you the type of some object whose type is unknown to you.
 * The 'keyof' gives you the union of literal types of properties of the type you got from 'typeof'.
 * These const Direction and type Direction should be the variables. you can't use different
 * variable names for const above and type below.
 */
type Direction = keyof typeof Direction

let directionEnum: Direction

directionEnum = Direction.North
console.log(directionEnum)

directionEnum = "South"
console.log(directionEnum)

// Type '"AnythingElse"' is not assignable to type '"North" | "South" | "East" | "West"'
// directionEnum = "AnythingElse"
