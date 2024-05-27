import fs from 'fs';
import axios from 'axios';

class FileReader {
    public static async readFile (path: string): Promise<string> {
        if (path.startsWith('http')) {
            const response = await axios.get(path);
            return response.data;
        }

        return fs.promises.readFile(path, 'utf-8');
    }
}

export default FileReader;