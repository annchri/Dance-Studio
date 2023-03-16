import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-contact-pages',
  templateUrl: './contact-pages.component.html',
  styleUrls: ['./contact-pages.component.css']
})
export class ContactPagesComponent {
  fname:string=''
  lname:string=''
  ename:string=''
  phone:string=''
  message:string=''
  constructor(private fire:FireService){}
  contact(){
    let info={
      name:this.fname,
      lname:this.lname,
      email:this.ename,
      phone:this.phone,
      message:this.message
    }
    this.fire.contact(info)
    this.fname=''
    this.lname=''
    this.ename=''
    this.phone=''
    this.message=''
  }

}
