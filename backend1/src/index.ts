
import { WebSocketServer } from 'ws';
import { GameManager } from './GameManager.js';
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {

  const gameManager=new GameManager();
  gameManager.addUser(ws);
  ws.on("close",()=>gameManager.removeUser(ws));

})