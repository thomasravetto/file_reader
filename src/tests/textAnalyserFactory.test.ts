import TextAnalyserFactory from '../textAnalyserFactory';
import TextAnalyser from '../textAnalyser';

describe('TextAnalyserFactory', () => {
    it('should create a TextAnalyser instance', () => {
        const text = 'Sample text';
        const textAnalyser = TextAnalyserFactory.createTextAnalyser(text);

        expect(textAnalyser).toBeInstanceOf(TextAnalyser);
    });

    it('should pass the text to the TextAnalyser instance', () => {
        const text = 'Sample text';
        const textAnalyser = TextAnalyserFactory.createTextAnalyser(text);

        expect((textAnalyser as any).text).toBe(text);
    });
});
