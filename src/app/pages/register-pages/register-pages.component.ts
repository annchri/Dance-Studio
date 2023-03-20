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
state:string=''
form:string=''
credit:string=''
 debit:string=''
paypal:string=''
nameon:string=''
creditno:string=''
Expiration:string=''
cvv:string=''
  constructor(private fired:FireService){}
  register(){ 
    let info={
      fname:this.fname,
     lname: this.lname,
     gender:this.gender,
     address:this.address,
     address2:this.address2,
     city:this.city,
     postal:this.postal,
     state:this.state,
     form:this.form,
     credit:this.credit,
     
     debit:this.debit,
      paypal:this.paypal,
     nameon:this.nameon,
     creditno:this.creditno,
     Expiration:this.Expiration,
     cvv:this.cvv
    
    }
    this.fired.register(info)
    this.fname=''
    this.lname=''
    this.gender=''
    this.address=''
    this.address2=''
    this.city=''
    this.postal=''
    this.state=''
    this.form=''
    this.credit=''
    this.debit=''
    this.paypal=''
    this.nameon=''
    this.creditno=''
    this.Expiration=''
    this.cvv=''
  }
}
