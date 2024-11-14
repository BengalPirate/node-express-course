const EventEmitter = require("events");
const emitter = new EventEmitter();

// Event Handler 1: Logs messages from 'message' event
emitter.on("message", (msg) => {
  console.log("Message Event Received:", msg);
  // Emit a follow-up event
  emitter.emit("response", `Received: ${msg}`);
});

// Event Handler 2: Logs responses from 'response' event
emitter.on("response", (response) => {
  console.log("Response Event Triggered:", response);
});

// Emit the 'message' event every 2 seconds
setInterval(() => {
  emitter.emit("message", "Hello from Interval!");
}, 2000);

// Asynchronous event handler that waits for 'dataReceived' event
const waitForData = () => {
  return new Promise((resolve) => {
    emitter.on("dataReceived", (data) => resolve(data));
  });
};

const handleData = async () => {
  const data = await waitForData();
  console.log("Data received asynchronously:", data);
};

// Start waiting for the 'dataReceived' event asynchronously
handleData();

// Emit 'dataReceived' event after a 3-second delay
setTimeout(() => {
  emitter.emit("dataReceived", { id: 1, value: "Async Data" });
}, 3000);

// Emit a 'complete' event after a 5-second delay, triggering a chain of events
emitter.on("complete", (msg) => {
  console.log("Complete Event Triggered:", msg);
  emitter.emit("finalize", "Finishing up!");
});

// Final event handler for 'finalize'
emitter.on("finalize", (msg) => {
  console.log("Finalize Event Triggered:", msg);
});

// Emit 'complete' event after 5 seconds
setTimeout(() => {
  emitter.emit("complete", "All tasks completed!");
}, 5000);
