import FileReader from "./fileReader";
import WordCounter from "./wordCounter";

import readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Enter the file path or URL\n", async (path) => {
    try {
        const fileContent = await FileReader.readFile(path);
        const wordCounter = new WordCounter(fileContent);

        console.log(`Total number of words is ${wordCounter.countWords()}`);

        const frequentWords = wordCounter.frequentWords(10);

        if (Object.keys(frequentWords).length > 0) {
            console.log('Words that appear more than 10 times: ', frequentWords);
        } else {
            console.log("No word appear more than 10 times")
        }


    } catch (error) {
        console.log("Error reading file:", error);
    } finally {
        rl.close();
    }
})