import { Database } from './Database';
import Express from './Express';
import Socket from './socket';

class App {
  /**
   * Load server
   */
  public loadServer(): void {
    // Initialize express server
    Express.init();
    // initialize socket
    Socket.init(Express.getExpress());
  }

  /**
   * Load Database
   */
  public loadDatabase(): void {
    Database.init();
  }
}

export default new App();
