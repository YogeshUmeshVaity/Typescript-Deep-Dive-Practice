// In Typescript, we need to define the type of object literal. Like we have done in the following
// trees object. The part followed by trees: is the type we define. It's called index signature
// which defines the Types we are going to use. So Typescript will let us store and read only the 
// data that conforms to the structure. The name of the index signature e.g. 'index' in following
// example has no significance. You can give any meaningful name like treename.
const trees: {[index: string] : {color: string, size: number}} = {
    rubber: {
        color: 'Burgundy',
        size: 4
    },
    snake: {
        color: 'Yellow',
        size: 2
    },
    parlour: {
        color: 'Green',
        size: 1
    },
    peace: {
        color: 'Dark Green',
        size: 3
    }
}

/**
 * Takes a tree name and returns a Promise to the tree details which are resolved asynchronously.
 */
async function getTree(treeName: string) {
    return new Promise<{color:string; size: number}>(resolve => {
        setTimeout(() => {
            resolve(trees[treeName])
        }, 1000)
    })
}

const names = ['rubber', 'snake', 'parlour', 'peace']

async function printDetailsSerially() {
    // For..in loop iterates over keys(indices).
    // For..of loop iterates over values(elements).
    for(const name of names) {
        const details = await getTree(name)
        console.log(`name: ${name}: color: ${details.color}, size: ${details.size}`)        
    }
}

async function printDetailsParallelly() {
    const treePromises = names.map(getTree)
    const combinedArray = Promise.all(treePromises)
    const detailsArray = await combinedArray
    for(const details of detailsArray) {
        console.log(`color: ${details.color}, size: ${details.size}`)
    }
}

printDetailsSerially()
printDetailsParallelly()