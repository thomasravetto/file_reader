"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const textAnalyser_1 = __importDefault(require("../textAnalyser"));
describe('TextAnalyser', () => {
    let textAnalyser;
    const sampleText = "Hello world! Hello everyone. This is a test. 12345";
    beforeEach(() => {
        textAnalyser = new textAnalyser_1.default(sampleText);
    });
    it('should count the total number of words', () => {
        expect(textAnalyser.countWords()).toBe(9);
    });
    it('should count the total number of letters', () => {
        expect(textAnalyser.countLetters()).toBe(34);
    });
    it('should count the total number of digit characters', () => {
        expect(textAnalyser.countDigits()).toBe(5);
    });
    it('should count the total number of spaces', () => {
        expect(textAnalyser.countSpaces()).toBe(8);
    });
    it('should return words that appear more than the given threshold', () => {
        const frequentWords = textAnalyser.frequentWords(2);
        expect(frequentWords).toEqual({ hello: 2 });
    });
    it('should return an empty object if no words meet the threshold', () => {
        const frequentWords = textAnalyser.frequentWords(10);
        expect(frequentWords).toEqual({});
    });
});
