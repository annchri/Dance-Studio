import { Injectable } from '@angular/core';
import { Auth,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Firestore,collectionData,collection,addDoc } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private auth:Auth,private router:Router,private fire:Firestore) { }
  //signUp method()
  signUp (email:string,pass: string){
    createUserWithEmailAndPassword(this.auth,email,pass).then(res => {
      alert("Sign up successfully")
      this.router.navigate(['/'])
    }).catch(err => {
      alert(err)
    })
  }
  //logout method()
  logOut(){
  signOut(this.auth).then(res =>{
    alert("Log out successfully")
    this.router.navigate(['/login'])
  }).catch(err => {
    alert(err)
  })

  }
  //login method()
  logIn(email:string,pass:string){
    signInWithEmailAndPassword(this.auth,email,pass).then(res =>{
      alert("Log In successfully")
      this.router.navigate(['/'])
    }).catch(err => {
      alert(err)
    })
  }
  //contact-us method()
  contact(data: any){
    const contactCollection =collection(this.fire, 'contactDetails')
    addDoc(contactCollection,data).then(res =>{
      alert("Data added successfully")
    }).catch(err =>{
      alert(err)
    })
  }
  //register()
  register(data:any){
    const registerCollection=collection(this.fire,'registerDetails')
    addDoc(registerCollection,data).then(res=>{
      alert("data added successfully")
    }).catch(err=>{
      alert(err)
    })
  }
}
