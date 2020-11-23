import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  constructor(private api:ChatbotService) { }
  answer=[];
  new='';
  
  ngOnInit(): void {
  }
  massage(massage:string)
  {
    
    (<HTMLInputElement>document.getElementById("form__input")).value=''

    if(massage==''){
      alert("Please Enter Question")
    }
         
    this.api.getEmployeesList()
    .subscribe(data => {
      console.log(data)
      this.answer=data;
      this.answer.forEach(e=>{
        if(e.question==massage)
        {
          var userinput=document.createElement('div');
          userinput.innerHTML=massage;
          userinput.className="chatarea-inner user"
          document.getElementById('massage').appendChild(userinput);
          this.new=e.answer;
          console.log("value ",this.new)
          var answer=document.createElement('div');
          answer.innerHTML=e.answer;
          answer.className="chatarea-inner chatbot"
          document.getElementById('massage').appendChild(answer);
        }
      })
    }, error => console.log(error));
  
  }
 

}
