
import { airPurifiers as purifiers, airPurifiers } from "./module-for-export"
import { humidifiers, detoxifiers } from "./module-for-export"

// Both allowed
console.log(purifiers);     // use alias
console.log(airPurifiers)   // use actual name

// exported using export { } block
console.log(humidifiers)
console.log(detoxifiers)

