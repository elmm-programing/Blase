import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/app/services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,private _router: Router) {

  }

  public usuario: {email:string;password:string;} ={
    email: '',
    password: ''
  }
  public Ingresar(): any {
    if (this.usuario.email && this.usuario.password) {
      this.loginService.login(this.usuario.email, this.usuario.password).then( (res)=>{
	 this._router.navigateByUrl('/main')
	console.log("Se inicio sesion: ",res);
      } )	
    }else{
alert("Insert some values")
    }
  	
  }
  public IngresarWithGoogle(): any {

      this.loginService.loginWithGoogle(this.usuario.email, this.usuario.password).then( (res)=>{
	 this._router.navigateByUrl('/main')
	console.log("Se registro: ",res);
      } )	
  	
  }
  ngOnInit(): void {

  }

}
