import { Injectable } from '@angular/core';
import  { AngularFireAuth }from '@angular/fire/compat/auth';
import firebase from "firebase/compat/app";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afauth: AngularFireAuth) { }

 public async register( email: string, password: string)  {
    try{
      return await this.afauth.createUserWithEmailAndPassword(email,password);

    }catch(e){
      console.log("Error in login",e);
      return null;
    }
  }
  public async login( email: string, password: string)  {
    try{
      return await this.afauth.signInWithEmailAndPassword(email,password);

    }catch(e){
      console.log("Error in login",e);
      return null;
    }
  	
  }
public async loginWithGoogle( email: string, password: string)  {
    try{
      return await this.afauth.signInWithPopup( new firebase.auth.GoogleAuthProvider());

    }catch(e){
      console.log("Error in login",e);
      return null;
    }
  	
  }

  public getUserLogged()  {
    return this.afauth.authState;
  }
  public logout () {
     this.afauth.signOut();
  	
  }

}
