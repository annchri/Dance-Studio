import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-pages',
  templateUrl: './about-pages.component.html',
  styleUrls: ['./about-pages.component.css']
})
export class AboutPagesComponent {
  
  constructor(private studio  :HeroService,private Router:Router){}
  classes=this.studio.getData1()

  dancers= this.studio.getData()

  // hero=this.about1.getData1()

    gotoHere(id:any,cat:any){
      localStorage.setItem('id',id)
      localStorage.setItem('cat',cat)
     this.Router.navigate(['/single'])

  // gotohere(id:any){
    
  //   this.Router.navigate(['/single',id])
  // }
  // }
  }
}
