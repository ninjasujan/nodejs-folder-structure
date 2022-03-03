interface IConfig {
  (): {
    ENVIRONMENT: string;
    PORT: string | number;
    MONGOOSE_URI: string;
    API_SECRET: string;
  };
}

class Locals {
  /**
   * Make env available throughout your application runtime
   */
  public static config: IConfig = () => {
    const ENVIRONMENT = process.env.ENVIRONMENT || 'dev';
    const PORT = process.env.PORT || 4000;
    const MONGOOSE_URI = process.env.MONGO_URI || '';
    const API_SECRET =
      process.env.TOKEN_SECRET || 'This is your responsibility!';
    return {
      ENVIRONMENT,
      PORT,
      MONGOOSE_URI,
      API_SECRET,
    };
  };
}

export default Locals;
