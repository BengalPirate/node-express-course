const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (input) => {
  const amount = parseInt(input);

  if (amount < 10) {
    console.log('small number');
  } else if (10 < amount && amount < 20) {
    console.log('medium number');
  } else {
    console.log('large number');
  }

  console.log(`hey it's my first node app!!!`);
  rl.close();
});
