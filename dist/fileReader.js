"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const axios_1 = __importDefault(require("axios"));
class FileReadError extends Error {
    constructor(message) {
        super(message);
        this.name = "FileReadError";
    }
}
class URLFetchError extends Error {
    constructor(message) {
        super(message);
        this.name = "URLFetchError";
    }
}
// class uses singleton design pattern to use a single instance over the application
class FileReader {
    constructor() { }
    static getInstance() {
        if (!FileReader.instance) {
            FileReader.instance = new FileReader();
        }
        return FileReader.instance;
    }
    // reading filepath or URL
    readFile(path) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (path.startsWith('http')) {
                    const response = yield axios_1.default.get(path);
                    return response.data;
                }
                else {
                    return yield fs_1.default.promises.readFile(path, 'utf-8');
                }
            }
            catch (error) {
                if (path.startsWith('http')) {
                    throw new URLFetchError(`Failed to fetch the URL: ${error.message}`);
                }
                else {
                    throw new FileReadError(`Failed to read the file: ${error.message}`);
                }
            }
        });
    }
}
exports.default = FileReader;
