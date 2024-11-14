// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

// Print the value of the environment variable MY_VAR
console.log("MY_VAR:", process.env.MY_VAR);

console.log(__dirname)
setInterval(() => {
  console.log('hello world')
}, 1000)
