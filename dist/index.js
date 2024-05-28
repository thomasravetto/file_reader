"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fileReader_1 = __importDefault(require("./fileReader"));
const textAnalyserFactory_1 = __importDefault(require("./textAnalyserFactory"));
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface(process.stdin, process.stdout);
rl.question("Enter the file path or URL\n", (path) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fileContent = yield fileReader_1.default.getInstance().readFile(path);
        const textAnalyser = textAnalyserFactory_1.default.createTextAnalyser(fileContent);
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
        }
        else {
            console.log("No word appear more than 10 times");
        }
    }
    catch (error) {
        console.log("Error reading file:", error);
    }
    finally {
        rl.close();
    }
}));
