import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Content-Type':'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ChatlogService {

  url:string="http://localhost:8080/service/chatlogs/chat";


  constructor(private _http:HttpClient) {

   }

   getChatLog(){
     return this._http.get(this.url,httpOptions);
   }

   getChatLogbyProfile(profile){
    return this._http.get(this.url+'/'+'profile'+'?'+'profile='+profile,httpOptions);
  }


   insertChatLog(message){
     return this._http.post(this.url,message,httpOptions)
   }
}
