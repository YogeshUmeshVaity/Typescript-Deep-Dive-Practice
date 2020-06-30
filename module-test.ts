
import { airPurifiers as purifiers, airPurifiers } from "./moduleForExport"
import { humidifiers, detoxifiers } from "./moduleForExport"

// Both allowed
console.log(purifiers);     // use alias
console.log(airPurifiers)   // use actual name

// exported using export { } block
console.log(humidifiers)
console.log(detoxifiers)

