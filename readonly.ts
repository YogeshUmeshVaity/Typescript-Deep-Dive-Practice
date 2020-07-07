let foo: {
  readonly bar: number
} = {
  bar: 123,
}

/**
 * This allowed because the bar is not specified as readonly. 
 * If you make the bar readonly, then you get error.
 */
function iMutateFoo(foo: { bar: number }) {
  foo.bar = 456
}

iMutateFoo(foo) // The foo argument is aliased by the foo parameter
console.log(foo.bar) // 456!

interface Foo {
    readonly bar: number
}


function iTakeFoo(foo: Foo) {
    // foo.bar = 456  // Not allowed
}


