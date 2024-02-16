const event=require("events")

const newEventEmitter=new event()

const subscribeCW=function (e) {
    console.log(`Thanks for subscribing to ${e}`);
}

newEventEmitter.addListener("hello",subscribeCW)

// newEventEmitter.removeListener("hello",subscribeCW);

newEventEmitter.emit("hello","College Wallah");

console.log(`default text limit is ${newEventEmitter.getMaxListeners()}`);
newEventEmitter.setMaxListeners(5)
console.log(`update text limit is ${newEventEmitter.getMaxListeners()}`);