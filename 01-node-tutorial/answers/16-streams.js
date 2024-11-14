const { createReadStream } = require("fs");

const filePath = "../content/big.txt"; // Path to the big file

// Initialize the stream with encoding and highWaterMark of 200 bytes
const stream = createReadStream(filePath, { encoding: "utf8", highWaterMark: 200 });

let chunkCounter = 0; // Counter to keep track of the number of chunks

// Handle the 'data' event
stream.on("data", (chunk) => {
  chunkCounter++;
  console.log(`Chunk ${chunkCounter}:`, chunk); // Log each chunk
});

// Handle the 'end' event
stream.on("end", () => {
  console.log(`\nTotal chunks received: ${chunkCounter}`);
});

// Handle the 'error' event
stream.on("error", (error) => {
  console.error("An error occurred while reading the file:", error);
});
