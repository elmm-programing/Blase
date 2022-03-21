import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  UserLogged = this.loginService.getUserLogged(); 
  UserId:any;
  profileUrl: Observable<string | null>;
  ref:any;
  constructor(private loginService: LoginService,private _router: Router,private storage: AngularFireStorage) {
    console.log(this.UserId);
const ref = this.storage.ref(`/users/0TYdI3zITHgxCXpTeZNZdABtbV62`);
     this.profileUrl = ref.getDownloadURL();
      }
  
public obtenerUsuarioLogeado() {
  	
    this.loginService.getUserLogged().subscribe( res =>{
      console.log(res?.email);
      this.UserId = res?.uid;
      console.log(this.UserId);
      return res?.email;
    });
  }
  public logout(): any {
    this.loginService.logout();
    this._router.navigateByUrl('/login')

  	
  }


  ngOnInit(): void {
  }

}
