class Config {
    private static instance: Config;

    private constructor () {};

    public static getInstance () {
        if (!Config.instance) {
            Config.instance = new Config();
        }

        return Config.instance;
    }

    public get setting(): string {
        return "This is a singleton setting";
      }
}

export default Config;