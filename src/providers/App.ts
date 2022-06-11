import { Database } from './Database';
import Express from './Express';
import Socket from './socket';

class App {
    public initServer(): void {
        /** Initialize express server */
        Express.init();
        /** Initialize socket */
        Socket.init(Express.getExpress());
    }

    /** Load database */
    public initDatabase(): void {
        /** Initialize mongodb connection */
        Database.init();
    }
}

export default new App();
