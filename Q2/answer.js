const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Enter a number > '
})

const getDistinctCombinations = total => {
  let combinations = 0
  //denominations in pennies
  const coins = [1, 2, 5, 10, 20, 50, 100, 200]

  //Recursive function divides the provided total amount by each coin denominations  - in order of highest to lowest - and 
  //records a combination if there are no remainders at the end of the iterating over all the coin demominations

  const changer = (index, value) => {
    // start with the highest-valued coin and work backwards
    let currentCoin = coins[index]

    if( index === 0){
      if( value % currentCoin === 0){
        combinations++
      }
      return
    }

    while( value >= 0 ){
      changer(index-1, value)
      value -= currentCoin
    }
  }
  changer(coins.length-1, total)
  console.log(combinations)
  return combinations
}


rl.prompt()

rl.on('line', getDistinctCombinations)
