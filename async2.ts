// Variable without Promise
const one = 'One'

// Variable with a Promise with resolve
const two = new Promise(resolve => resolve('Two'))

// Variable with Promose with reject
const three = new Promise((resolve, reject) => reject(new Error('Three')))


// The await operator can be attached to any variable. If that variable is not a Promise, the value
// returned for the await operator is the same as the variable.
// But if the variable is a Promise, then the execution of the function is paused until it is clear 
// whether the Promise is going to be resolved or rejected.
async function test() {
    const four = await one
    console.log({one: four})
    
    // If the Promise resolves, the value of the await operator is the resolved value of Promise.
    const five = await two
    console.log({two: five})
    
    try {
        // If the variable is a promise that gets rejected, the await operator throws an error in
        // the body of the async function which we can catch with try/catch constructs.
        const six = await three
        console.log({three: six})
        console.log('This will not get called.')
        
    } catch (err) {
        console.log({three: err.message})
    }
}

test()