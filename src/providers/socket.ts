import { Server, Socket } from 'socket.io';
import { Server as app } from 'http';
import { ConnectionEvent } from '../constants/socket.constant';
import SocketHandler from '../app/handler/socket/socket.handler';

/**
 * Initialization socket and attaching events
 */
class SocketIO {
    public static io: any;

    public static socket: Socket;

    public static init(server: app) {
        SocketIO.io = new Server(server, {
            maxHttpBufferSize: 7e6,
            transports: ['websocket'],
            cors: {
                origin: '*',
            },
        });
        SocketIO.io.use(this.socketMiddleware);
        SocketIO.io.on(ConnectionEvent.CONNECTION, SocketIO.socketConnection);
    }

    public static socketMiddleware(socket: Socket, next: Function) {
        /* eslint-disable-next-line no-console */
        console.log('[Socket middleware]', socket.id);
        next();
    }

    public static socketEventMiddleware(event: Array<any>) {
        /* eslint-disable-next-line no-console */
        console.log('\x1b[33m%s\x1b[0m', `SOCKET: ${event[0]}`);
    }

    public static socketConnection(socket: Socket) {
        /* eslint-disable-next-line no-console */
        console.log('[Socket connected]');
        SocketIO.socket = socket;

        socket.use((event: Array<any>, next: Function) => {
            SocketIO.socketEventMiddleware(event);
            next();
        });

        // subscribe socket events
        const connectionEvent = new SocketHandler(
            SocketIO.socket,
            SocketIO.socket,
        );
        connectionEvent.attacheEvents();
    }
}

export default SocketIO;
