class WordCounter {
    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    public countWords (): number {
        return this.text.split(/\s+/).length;
    }

    // this method just counts letters, commas and dots are not counted in the total
    public countLetters(): number {
        return (this.text.match(/[a-z]/gi) || []).length;
    }

    // counts numbers
    public countDigits(): number {
        return (this.text.match(/\d/g) || []).length;
    }

    public countSpaces (): number {
        return this.text.split(/\s+/).length - 1;
    }

    public frequentWords (threshold: number): Record<string, number> {
        const words = this.text.toLowerCase().match(/\b\w+\b/g) || [];

        const wordsMap: Record<string, number> = {};

        words.forEach(word => {
            wordsMap[word] = (wordsMap[word] || 0) + 1;
        });

        return Object.fromEntries(Object.entries(wordsMap).filter(([_, count]) => count >= threshold));
    }
}

export default WordCounter;