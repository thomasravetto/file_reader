import FileReader from "./fileReader";
import TextAnalyserFactory from "./textAnalyserFactory";

import readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Enter the file path or URL\n", async (path) => {
    try {
        const fileContent = await FileReader.getInstance().readFile(path);
        const textAnalyser = TextAnalyserFactory.createTextAnalyser(fileContent);

        console.log(`Total number of words is ${textAnalyser.countWords()}`);
        console.log(`Total number of letters is ${textAnalyser.countLetters()}`);

        // since in most phrases there are no digits, the log of numbers count is conditional.
        const digitNumber = textAnalyser.countDigits();
        if (digitNumber > 0) {
            console.log(`Total number of numerical characters is ${digitNumber}`);
        }

        console.log(`Total number of spaces is ${textAnalyser.countSpaces()}`);

        const frequentWords = textAnalyser.frequentWords(10);
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
});