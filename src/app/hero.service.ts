import { Injectable } from '@angular/core';
import { studio} from 'src/assets/data/data';
import { classes } from 'src/assets/data/data1';
//  import {classes} from 'src/assets/data/data1';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  constructor() { }
   getData() {
     return studio
   }

   getData1() {
      return classes
    }

  
}

