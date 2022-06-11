import BaseHandler from './base.handler';
import { ConnectionEvent } from '../../../constants/socket.constant';

/**
 * SocketHandler - To manage socket connection events
 */

class SocketHandler extends BaseHandler {
    public attacheEvents() {
        this.socket.on(ConnectionEvent.DISCONNECTING, this.socketDiconnecting);
        this.socket.on(ConnectionEvent.DISCONNECTED, this.socketDisconnected);
    }

    private socketDiconnecting(reason: any) {
        /* eslint-disable-next-line no-console */
        console.log('[Socket disconnecting]', reason);
    }

    private socketDisconnected(reason: any) {
        /* eslint-disable-next-line no-console */
        console.log('[Socket disconnected]', reason);
    }
}

export default SocketHandler;
