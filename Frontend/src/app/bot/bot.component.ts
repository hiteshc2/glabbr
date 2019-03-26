import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Message } from '../message.model';
import { ChatlogService } from '../chatlog.service';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {

  userResponse: Message;
  chatlog: Message[] = [];
  value = 0;
  data:any;

  selectedProfile;

  randomMessages = [
    "Good to hear from you.. Let me quickly connect you to our customer help..",
    "Oops.. looks like our services are down.. our executives are on their way to help you..",
    "Just who I wanted to see.. How are you doing?",
    "It feels like something is not right, Let me find a person to help you..",
    "Aaahh.. There you go.. I shall remember that, Meanwhile let me connect you to someone with an answer..",
  ]

  constructor(private _chatService: ChatService,private _chatLogService:ChatlogService) { }

  ngOnInit() {
    this._chatService.getUserMessage().subscribe(text => {
      this.userResponse = text;
      this.selectedProfile = this.userResponse.profile;
      this.chatlog.push(this.userResponse);
      var reponse = this.randomMessages[Math.floor(Math.random() * this.randomMessages.length)];
      this.respond(reponse)
    })
  }

  respond(botInput) {
    let message = new Message();

    message.body = botInput;
    message.sender = "bot";
    message.timestamp = new Date();
    message.profile = this.selectedProfile;

    let interval = setInterval(() => {
      this._chatService.setBotMessage(message);
      this.chatlog.push(message);
      this.insertChatLog(message)
      clearInterval(interval);
    }, 1000);
  }

  insertChatLog(message){
    this._chatLogService.insertChatLog(message).subscribe(result=>{
      this.data = result;
    })
  }

  getChatLogByProfile(profile:string){
    this._chatLogService.getChatLogbyProfile(profile).subscribe(result=>{
      this.data = result;
      this.chatlog = this.data;
    })
  }

  getChatLog(){
    this._chatLogService.getChatLog().subscribe(result=>{
      this.data = result;
      this.chatlog = this.data;
    })
  }

}
