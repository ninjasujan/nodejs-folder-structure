import mongoose from 'mongoose';
import Locals from '../configs/Locals';
import Logger from '../logs/logger';

export class Database {
    /**
     * Initializing the database
     */
    public static init(): any {
        const { MONGO_URI } = Locals.config().mongodb;

        mongoose.connect(MONGO_URI);

        mongoose.connection.on('connected', async () => {
            /* eslint-disable-next-line no-console */
            Logger.info(`[Mongoose connection] success`);
        });

        mongoose.connection.on('error', () => {
            throw new Error(`[Mongoose connection] error`);
        });

        mongoose.connection.on('disconnected', () => {
            console.log(`[Mongoose disconnected] DB disconnected`);
        });
    }
}

export default mongoose;
