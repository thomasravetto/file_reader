"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const textAnalyserFactory_1 = __importDefault(require("../textAnalyserFactory"));
const textAnalyser_1 = __importDefault(require("../textAnalyser"));
describe('TextAnalyserFactory', () => {
    it('should create a TextAnalyser instance', () => {
        const text = 'Sample text';
        const textAnalyser = textAnalyserFactory_1.default.createTextAnalyser(text);
        expect(textAnalyser).toBeInstanceOf(textAnalyser_1.default);
    });
    it('should pass the text to the TextAnalyser instance', () => {
        const text = 'Sample text';
        const textAnalyser = textAnalyserFactory_1.default.createTextAnalyser(text);
        expect(textAnalyser.text).toBe(text);
    });
});
