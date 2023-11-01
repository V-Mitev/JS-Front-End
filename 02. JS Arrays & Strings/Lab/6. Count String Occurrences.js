function solve(text, word) {
    let words = text.split(' ');
    let countOfRepeatWord = 0;

    for (const currentWord of words) {
        if (currentWord === word) {
            countOfRepeatWord++;
        }
    }

    console.log(countOfRepeatWord);
}

solve("This is a word and it also is a sentence is is a is", "is");