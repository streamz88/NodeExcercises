//Map over words
//Write a program that, when given a list of words separated by spaces
//, outputs the words in reverse order.
// The input may contain multiple lines, consider each line of the input to be a separate set of words, and output each set of words on a new line.
//
// Example input:
// Welcome to William Hill
// Enjoy the test
// Example output:
// Hill William to Welcome
// test the Enjoy

const results = []
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Enter words > '
})

rl.prompt()


rl.on('line', init(line))
  .on('SIGINT', () => showConfirmDialog)

let reverse = (words) =>  words.split(' ').reverse().join(' ')

let showConfirmDialog = () => {
  rl.question('Are you sure you want to exit?', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause()
  })
}

let init = line => {
  if(line != 'done'){
    results.push(reverse(line))
  } else {
    results.forEach(result => console.log(result))
    process.exit(0)
  }
}
