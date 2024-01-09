const fs = require('fs');
const code_input = "./coding_qual_input.txt";

function decode(code_input) {
    const message = fs.readFileSync(code_input, 'utf8');
    const lines = message.split("\n")
    const numbers = lines.map(line => parseInt(line.split(' ')[0]));
    const words = lines.map(line => line.split(' ')[1]);
    const maxNumber = Math.max(...numbers)
    const numberOfWords = Math.floor(-1 + Math.sqrt(1 + 4 * maxNumber*2))/2 
    //use quadratic equation to solve for number of words in resultant string
    let decodedMessage = ""
    for (let i=1; i<=numberOfWords; i++){
        let currentNumber = i*(i+1)/2
        let currentWordIndex = numbers.indexOf(currentNumber)
        let currentWordClean = words[currentWordIndex].replace(/(\r\n|\n|\r)/gm, "")
        decodedMessage += currentWordClean + " "

    }
console.log(decodedMessage.trim())
return decodedMessage.trim()
}

decode(code_input);