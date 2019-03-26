import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Message } from '../message.model';
import { FormGroup, FormControl } from '@angular/forms';
import { ChatlogService } from '../chatlog.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  botResponse: Message;
  chatlog: Message[] = [];

  welcomeMessage = new Message();
  welcomePhrase='Greetings buddy.. Before we get started could you please select one of the profiles from above..';
  inputForm;
  data:any;
  selectedProfile;

  constructor(private _chatService: ChatService,private _chatLogService:ChatlogService) {
    this.inputForm = new FormGroup({
      'userInput': new FormControl()
    })
    this.welcomeMessage.body=this.welcomePhrase;
    this.chatlog.push(this.welcomeMessage);
  }

  ngOnInit() {
    this._chatService.getBotMessage().subscribe(text => {
      this.botResponse = text;
      this.chatlog.push(this.botResponse);
    })
  }

  reply(userInput) {
    let message = new Message();
    if (userInput != '' && this.selectedProfile != undefined || this.selectedProfile != null) {
      message.body = userInput;
      message.sender = "user";
      message.timestamp = new Date();
      message.profile =this.selectedProfile;

      this._chatService.setUserMessage(message);
      this.chatlog.push(message);
      this.insertChatLog(message);
      this.inputForm.reset();
    }else{
      let selectedProfilePhrase = new Message;
      selectedProfilePhrase.sender='bot';
      selectedProfilePhrase.body="I knew you would try to sneak out of it.. I suggest you to select Profile first!"
      this.chatlog.push(selectedProfilePhrase);
    }
  }

  insertChatLog(message){
    this._chatLogService.insertChatLog(message).subscribe(result=>{
      this.data = result;
    })
  }

  selectProfile(profile:string){
    this.chatlog=[];
    this.selectedProfile=profile;
    let selectedProfilePhrase = new Message;
    selectedProfilePhrase.sender='bot';
    selectedProfilePhrase.body="Welcome Person "+profile+".. What may I help you with?"
    this.chatlog.push(selectedProfilePhrase);
  }


}
