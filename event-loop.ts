// See this link for more info on event loop:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#Run-to-completion

const startSeconds = new Date().getSeconds()

setTimeout(function () {    
    // This anonymous function is the message1 of the event loop. Since, this message is given to 
    // the setTimeout(), it will be pushed to the queue of event loop only after the specified
    // timeout. That means the message2 is executed before message1. So here it will be executed
    // only after 2 seconds even though we have given it the delay of half a second.
  console.log(
    "Ran after " +
      (new Date().getSeconds() - startSeconds) +
      " seconds"
  )
}, 500)

// This while loop is the message2 of the event loop
while (true) {
  if (new Date().getSeconds() - startSeconds >= 2) {
    console.log("Good, looped for 2 seconds")
    break
  }
}