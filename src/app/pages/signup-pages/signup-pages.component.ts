import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-signup-pages',
  templateUrl: './signup-pages.component.html',
  styleUrls: ['./signup-pages.component.css']
})
export class SignupPagesComponent {
email:string =''
psw:string=''
pswre:string=''

constructor(private fired:FireService){}
submit(){
this.fired.signUp(this.email,this.psw)
this.email=''
this.psw=''
this.pswre=''

}
}
