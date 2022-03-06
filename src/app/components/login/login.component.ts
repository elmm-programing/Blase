import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {

  }

  public usuario: {email:string;password:string;} ={
    email: '',
    password: ''
  }
  public Ingresar(): any {
    if (this.usuario.email && this.usuario.password) {
      this.loginService.login(this.usuario.email, this.usuario.password).then( (res)=>{
	console.log("Se inicio sesion: ",res);
      } )	
    }else{
alert("Insert some values")
    }
  	
  }
  public IngresarWithGoogle(): any {

      this.loginService.loginWithGoogle(this.usuario.email, this.usuario.password).then( (res)=>{
	console.log("Se registro: ",res);
      } )	
  	
  }
  ngOnInit(): void {
  }

}
