export interface ILocal {
    server: {
        ENVIRONMENT: string;
        PORT: string;
        ACCESS_TOKEN_SECRET: string;
    };
    mongodb: {
        MONGO_URI: string;
    };
}
