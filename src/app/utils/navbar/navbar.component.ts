import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']

})
export class NavbarComponent {
  constructor(private fired:FireService){}
logout(){
  this.fired.logOut()
}
}
