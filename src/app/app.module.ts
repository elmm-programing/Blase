import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';
import {environment} from 'src/environments/environment';
import { MainComponent } from './components/main/main.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
