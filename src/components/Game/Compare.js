const compare = (guess, word) => {
    
    let g = guess.toUpperCase().split('');
    let w = word.toUpperCase().split('');
    let output = [];
    let output2 = [];
    let tmpWord = word.toUpperCase().split('');


    for (let i = 0; i < w.length; i++) {
        if (g[i] === w[i]) {
            output[i] = {
                letter: g[i],
                result: "Correct",
                color: "green"
            };

            tmpWord[i] = "!"
            output2.push(i)
        }
    }
    for (let i = 0; i < w.length; i++) {
        if (!output2.includes(i)) {
            if (tmpWord.includes(g[i])) {
                output[i] = {
                    letter: g[i],
                    result: "Missplaced",
                    color: "Yellow"
                }
            }
            if (!tmpWord.includes(g[i])) {
                output[i] = {
                    letter: g[i],
                    result: "Incorrect"
                }
            }
        }
    }

    console.log(output)
    return output;
}

export default compare;