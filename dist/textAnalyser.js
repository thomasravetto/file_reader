"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WordCounter {
    constructor(text) {
        this.text = text;
    }
    countWords() {
        return this.text.split(/\s+/).length;
    }
    // this method just counts letters, commas and dots are not counted in the total
    countLetters() {
        return (this.text.match(/[a-z]/gi) || []).length;
    }
    // counts numbers
    countDigits() {
        return (this.text.match(/\d/g) || []).length;
    }
    countSpaces() {
        return this.text.split(/\s+/).length - 1;
    }
    frequentWords(threshold) {
        const words = this.text.toLowerCase().match(/\b\w+\b/g) || [];
        const wordsMap = {};
        words.forEach(word => {
            wordsMap[word] = (wordsMap[word] || 0) + 1;
        });
        return Object.fromEntries(Object.entries(wordsMap).filter(([_, count]) => count >= threshold));
    }
}
exports.default = WordCounter;
