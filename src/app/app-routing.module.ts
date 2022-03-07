import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {MainComponent} from './components/main/main.component';
import {RegistrarComponent} from './components/registrar/registrar.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'registrar', component: RegistrarComponent},
  {path:'main', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
