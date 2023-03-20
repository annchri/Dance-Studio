import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';

import { PortfolioPagesComponent } from './pages/portfolio-pages/portfolio-pages.component';
import { RegisterPagesComponent } from './pages/register-pages/register-pages.component';
import { SignupPagesComponent } from './pages/signup-pages/signup-pages.component';
import { SinglePagesComponent } from './pages/single-pages/single-pages.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path:'' ,redirectTo:'login',pathMatch:'full'
  },
  {
    path:'home',component:HomePagesComponent,canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path:'about',component:AboutPagesComponent,canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path:'portfolio',component:PortfolioPagesComponent,canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path:'contact',component:ContactPagesComponent,canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path:'single',component:SinglePagesComponent,canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path:'register',component:RegisterPagesComponent,canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path:'login',component:LoginPagesComponent,canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems } 
  },
  {
    path:'signup',component:SignupPagesComponent,canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems }
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
