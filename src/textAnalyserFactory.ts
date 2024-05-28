import TextAnalyser from './textAnalyser';

// using factory design pattern to create a new text analyser for each text that needs to be analysed
class TextAnalyserFactory {
    public static createTextAnalyser (text: string): TextAnalyser {
        return new TextAnalyser(text);
    }
}

export default TextAnalyserFactory;