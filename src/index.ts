import App from './providers/App';

class Bootup {
    public static init = () => {
        /** Load database */
        App.initDatabase();

        /** Load server */
        App.initServer();
    };
}

Bootup.init();
