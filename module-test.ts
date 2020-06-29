
import { airPurifiers as purifiers, airPurifiers } from "./module-for-export"

// Both allowed
console.log(purifiers);     // use alias
console.log(airPurifiers)   // use actual name
