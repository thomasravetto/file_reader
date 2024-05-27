"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Config {
    constructor() { }
    ;
    static getInstance() {
        if (!Config.instance) {
            Config.instance = new Config();
        }
        return Config.instance;
    }
    get setting() {
        return "This is a singleton setting";
    }
}
exports.default = Config;
