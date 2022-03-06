import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/app/services/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  UserLogged = this.loginService.getUserLogged(); 
  constructor(private loginService: LoginService) { }
  
public obtenerUsuarioLogeado() {
  	
    this.loginService.getUserLogged().subscribe( res =>{
      console.log(res?.email);
      return res?.email;
    });
  }
  public logout(): any {
    this.loginService.logout();
  	
  }


  ngOnInit(): void {
  }

}
