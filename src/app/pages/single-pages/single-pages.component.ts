import { Component } from '@angular/core';

import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-single-pages',
  templateUrl: './single-pages.component.html',
  styleUrls: ['./single-pages.component.css']
})
export class SinglePagesComponent {
 
  single:any
  url:string='https://www.youtube.com/embed/'
  cat:any=''
// constructor(private hero:HeroService,private route:ActivatedRoute){}
constructor(private studio:HeroService){}
 ngOnInit():void{
    let id:any=localStorage.getItem('id')
    this.cat=localStorage.getItem('cat')
    // console.log(cat);

    if(this.cat==='classes'){
      let dataset=this.studio.getData1()
      this.single=dataset.filter(e=>e.name==id)
      console.log(this.single)
    }else{
      let dataset=this.studio.getData()
      console.log(dataset);
      this.single=dataset.filter(e=>e.name==id)
      console.log(this.single)
    }





 
    
    // let number:any=localStorage.getItem('number')
    // let datapool=this.studio.getData1()
    // this.single=datapool.filter(e=>e.form==number)
    // console.log(this.single)


}
}


