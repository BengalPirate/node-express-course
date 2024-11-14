const { writeFile, readFile } = require("fs").promises;

async function writer() {
  try {
    await writeFile("temp.txt", "Line 1\nLine 2\nLine 3\n");
    console.log("File written successfully!");
  } catch (error) {
    console.error("Error writing to file:", error);
  }
}

async function reader() {
  try {
    const data = await readFile("temp.txt", "utf-8");
    console.log("File content:\n" + data);
  } catch (error) {
    console.error("Error reading from file:", error);
  }
}

async function readWrite() {
  await writer(); // First, write to the file
  await reader(); // Then, read the file and log its content
}

// Call readWrite function to execute both in order
readWrite();
