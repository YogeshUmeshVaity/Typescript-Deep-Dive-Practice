class Component {}

class Fibonacci implements IterableIterator<number> {
  private n1 = 0
  private n2 = 1

  constructor(public maxValue: number) {}

  public next(): IteratorResult<number> {
    let current = this.n1
    this.n1 = this.n2
    this.n2 = current + this.n1
    if (this.maxValue != null && current <= this.maxValue) {
      return { done: false, value: current }
    } else {
      return { done: true, value: null }
    }
  }

  [Symbol.iterator](): IterableIterator<number> {
    return this
  }
}

let fibonacciGenerator = new Fibonacci(50)
for (let i = 0; i < 15; i++) {
  console.log(fibonacciGenerator.next())
}

let fibonacciGenerator2 = new Fibonacci(60)
for (const fibNumber of fibonacciGenerator2) {
    console.log(fibNumber);
}