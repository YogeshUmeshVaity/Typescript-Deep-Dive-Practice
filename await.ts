function resolveAfter2Seconds(num: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num)
    }, 2000)
  })
}

function printXyz() {
  console.log("xyz")
}

/**
 * If a Promise is passed to an await expression, it waits for the Promise to be fulfilled.
 */
async function printNumber() {
  var num = await resolveAfter2Seconds(10)
  console.log(num) // 10
}

printNumber()
printXyz()  // It's executed before printNumber(), because printNumber() is an async function
