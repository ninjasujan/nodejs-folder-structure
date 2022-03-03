import mongoose from 'mongoose';
import Locals from './Locals';
import dotenv from 'dotenv';
import path from 'path/posix';
dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });

export class Database {
  /**
   * Initializing the database
   */
  public static init(): any {
    mongoose.connect(Locals.config().MONGOOSE_URI);

    mongoose.connection.on('connected', async () => {
      /* eslint-disable-next-line no-console */
      console.log(`[Mongoose connection] success`);
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
