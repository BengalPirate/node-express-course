const { writeFile, readFile } = require("fs").promises;

writeFile("temp.txt", "Line 1\n") // Write the first line
  .then(() => {
    return writeFile("temp.txt", "Line 2\n", { flag: "a" }); // Append the second line
  })
  .then(() => {
    return writeFile("temp.txt", "Line 3\n", { flag: "a" }); // Append the third line
  })
  .then(() => {
    return readFile("temp.txt", "utf-8"); // Read the file
  })
  .then((data) => {
    console.log("File content:\n" + data); // Log the file content to the screen
  })
  .catch((error) => {
    console.error("An error occurred:", error); // Handle any errors
  });
