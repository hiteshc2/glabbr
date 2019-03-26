import { Injectable, EventEmitter } from '@angular/core';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  botMessage = new EventEmitter();
  userMessage = new EventEmitter();
  constructor() { }

  setBotMessage(botMessage){
    this.botMessage.emit(botMessage);
  }

  getBotMessage(){
    return this.botMessage;
  }

  setUserMessage(userMessage){
    this.userMessage.emit(userMessage);
  }

  getUserMessage(){
    return this.userMessage;
  }
}
