import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.css']
})
export class LoginPagesComponent {
  email:string =''
  psw:string=''

  constructor(private fired:FireService){}
submit(){
this.fired.logIn(this.email,this.psw)
this.email=''
this.psw=''

}
}
