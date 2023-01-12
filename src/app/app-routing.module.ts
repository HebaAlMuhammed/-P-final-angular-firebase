import { ProfilComponent } from './components/profil/profil.component';
import { KategoriComponent } from './components/kategori/kategori.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

import { CarComponent } from './components/car/car.component';
import { UyelerComponent } from './components/uyeler/uyeler.component';


const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['']);
const routes: Routes = [
  {
    path: 'hom',
    component: HomeComponent,
    
  },
  {
    path: 'profil',
    component: ProfilComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectToHome),
  },
  {
    path: 'signup',
    component: SignupComponent,
    ...canActivate(redirectToHome),
  },{
    path: 'kategori',
    component: KategoriComponent,
    ...canActivate(redirectToLogin),
  },{
    path: 'car', component : CarComponent,
    ...canActivate(redirectToLogin)
  },{
    path : 'uyeler', component :UyelerComponent,
    ...canActivate(redirectToLogin)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
