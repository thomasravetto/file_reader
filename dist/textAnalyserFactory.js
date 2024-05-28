"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const textAnalyser_1 = __importDefault(require("./textAnalyser"));
// using factory design pattern to create a new text analyser for each text that needs to be analysed
class TextAnalyserFactory {
    static createTextAnalyser(text) {
        return new textAnalyser_1.default(text);
    }
}
exports.default = TextAnalyserFactory;
