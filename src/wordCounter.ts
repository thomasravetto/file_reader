class WordCounter {
    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    public countWords (): number {
        return this.text.split(/\s+/).length;
    }

    public frequentWords (threshold: number): Record<string, number> {
        const words = this.text.toLowerCase().match(/\b\w+\b/g) || [];

        const wordsMap: Record<string, number> = {};

        words.forEach(word => {
            wordsMap[word] = (wordsMap[word] || 0) + 1;
        });

        return Object.fromEntries(Object.entries(wordsMap).filter(([_, count]) => count > threshold));
    }
}

export default WordCounter;