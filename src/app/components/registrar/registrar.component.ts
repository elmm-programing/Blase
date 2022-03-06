import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/app/services/login.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
 public usuario: {email:string;password:string;} ={
    email: '',
    password: ''
  }
  constructor(private loginService: LoginService) { }
public Ingresar(): any {
    if (this.usuario.email && this.usuario.password) {
      this.loginService.register(this.usuario.email, this.usuario.password).then( (res)=>{
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
