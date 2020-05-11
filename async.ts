const start = (callback: any) => {
    setTimeout(() => {
        callback('Hello')
        setTimeout(() => {
            callback('and welcome to')
            setTimeout(() => {
                callback('the Typescript')
            }, 1000)
        }, 1000)
    }, 1000)
};

// start((text: any) => console.log(text))


// Using Promise and async-await
const wait = (ms: number) => new Promise((res: any) => setTimeout(res, ms))

const startAsync = async (callback: any) => {
    await wait(1000)
    callback('Hello')
    await wait(1000)
    callback('and welcome to')
    await wait(1000)
    callback('the Typescript')
}

startAsync((text: any) => console.log(text))