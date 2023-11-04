function solve(word, text) {
    text = text.toLowerCase();

    let textArray = text.split(' ');
    let output = `${word} not found!`

    for (const currWord of textArray) {
        if (currWord === word) {
            output = word;
        }
    }

    console.log(output);
}

solve("zxc", "JavaScript is the best programming language");
