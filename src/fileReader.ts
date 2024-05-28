import fs from 'fs';
import axios from 'axios';

class FileReadError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "FileReadError";
    }
}

class URLFetchError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "URLFetchError";
    }
}

// class uses singleton design pattern to use a single instance over the application
class FileReader {
    private static instance: FileReader;

    private constructor () {}

    public static getInstance (): FileReader {
        if (!FileReader.instance) {
            FileReader.instance = new FileReader();
        }
        return FileReader.instance;
    }

    // reading filepath or URL
    public async readFile(path: string): Promise<string> {
        try {
            if (path.startsWith('http')) {
                const response = await axios.get(path);
                return response.data;
            } else {
                return await fs.promises.readFile(path, 'utf-8');
            }
        } catch (error: any) {
            if (path.startsWith('http')) {
                throw new URLFetchError(`Failed to fetch the URL: ${error.message}`);
            } else {
                throw new FileReadError(`Failed to read the file: ${error.message}`);
            }
        }
    }
}

export default FileReader;