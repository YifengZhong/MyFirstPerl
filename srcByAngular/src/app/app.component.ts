import { Component, OnInit } from '@angular/core';
import { ConnectService } from "./service/connectionSrv";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   hideorShow: boolean;
   appointmentDate: String;
   appointmentTime: String;
   appointmentDescription:String;
   message:string;
   public items: Object[];
   public button:String;
   constructor(public connect: ConnectService) {
      this.hideorShow=false;
   }
   ngOnInit() {
   }
   addRecord() {
    this.message="";
    let body = {
        appointmentDate: this.appointmentDate,
        appointmentTime: this.appointmentTime,
        appointmentDescription: this.appointmentDescription
     }; 
     this.connect.insertData(body).subscribe(data => {
      if(data.success === 1) {
        this.message = "Succeeded";
      } else {
        this.message = "Failed";
      } 
    });
   }
   getClaz() {
      if(this.hideorShow) {
        return "addParts";
        
      } else {
        return "hideParts";
      }
   }
   getNewClass() {
      if(this.hideorShow) {
        return "hideParts";
        
      } else {
        return "addParts";
      }
   }
   doQuery(inputValue:string) {
    this.message="";
    let body = {
      keyWords: inputValue
     }; 
     this.connect.searchByWord(body).subscribe(data => {
      this.items = data;
    });
   }
   onSubmit(form){
     this.addRecord();
   }
   onNew() {
     this.hideorShow = !this.hideorShow;
   }
   getDate() {
    let n =  new Date();
    let y = n.getFullYear();
    let m = n.getMonth() + 1;
    let d = n.getDate();
    console.log(y + "-" + m + "-" + d);
    return y + "-" + m + "-" + d;   
  }
}
