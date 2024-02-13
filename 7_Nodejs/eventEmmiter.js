const events = require("events");

const chatEmmiter = new events.EventEmitter();

//create event
function sendMessage(sender, message) {
  chatEmmiter.emit("message", { sender, message });
}

//listen for emmiting event
chatEmmiter.on("message", (messageData) => {
  console.log(`${messageData.sender}: ${messageData.message}`);
});

sendMessage("Pritam", "Hello");
