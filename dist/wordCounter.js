"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WordCounter {
    constructor(text) {
        this.text = text;
    }
    countWords() {
        return this.text.split(/\s+/).length;
    }
    frequentWords(threshold) {
        const words = this.text.toLowerCase().match(/\b\w+\b/g) || [];
        const wordsMap = {};
        words.forEach(word => {
            wordsMap[word] = (wordsMap[word] || 0) + 1;
        });
        return Object.fromEntries(Object.entries(wordsMap).filter(([_, count]) => count > threshold));
    }
}
exports.default = WordCounter;
