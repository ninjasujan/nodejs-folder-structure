import path from 'path';
import dotenv from 'dotenv';
import { ILocal } from '../interface/config/ILocal';

class App {
    constructor() {
        if (process.env.NODE_ENV === 'development') {
            dotenv.config({
                path: path.join(
                    __dirname,
                    '..',
                    '..',
                    '.env.development.local',
                ),
            });
        } else {
            dotenv.config({
                path: path.join(__dirname, '..', '..', '.env.production.local'),
            });
        }
    }

    public config = (): ILocal => {
        const configs: ILocal = {
            server: {
                PORT: process.env.PORT || '',
                ENVIRONMENT: process.env.ENVIRONMENT || 'development',
                ACCESS_TOKEN_SECRET:
                    process.env.ACCESS_TOKEN_SECRET ||
                    'This is your responsibility',
            },
            mongodb: {
                MONGO_URI: process.env.MONGO_URI || '',
            },
        };
        return configs;
    };
}

export default new App();
