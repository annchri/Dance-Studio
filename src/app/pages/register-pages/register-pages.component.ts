import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-register-pages',
  templateUrl: './register-pages.component.html',
  styleUrls: ['./register-pages.component.css']
})
export class RegisterPagesComponent {
fname:string=''
lname:string=''
gender:string=''
address:string=''
address2:string=''
city:string=''
postal:string=''

  constructor(private fired:FireService){}
  register(){ 
    let info={
      fname:this.fname,
     lname: this.lname,
     gender:this.gender,
     address:this.address,
     address2:this.address2,
     city:this.city,
     postal:this.postal

    }
  }
}
