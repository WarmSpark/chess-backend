import type { WebSocket } from 'ws';
import { WebSocketServer } from 'ws';
import { INIT_GAME } from './messages.js';
export class GameManager{
    private games:Gamepad[];
    private pendingUser:WebSocket;
    private users: WebSocket[];
    constructor(){
        this.games=[];
    }

    addUser(socket:WebSocket){
        this.users.push(socket);
        this.addhandler(socket);
    }
    removeUser(socket:WebSocket){
        this.users=this.users.filter(user=>user !==socket);
    }
    private addhandler(socket:WebSocket){
        socket.on("message",(data)=>{
            const message=JSON.parse(data.toString());
            if(message.type===INIT_GAME){
                if(this.pendingUser){

                }
                else{
                    this.pendingUser=socket;
                }
            }
        })
    } 
} 