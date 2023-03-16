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

const routes: Routes = [
  {path:'',component:HomePagesComponent},
  {path:'about',component:AboutPagesComponent},
  {path:'portfolio',component:PortfolioPagesComponent},
  {path:'contact',component:ContactPagesComponent},
  {path:'single',component:SinglePagesComponent},
  {path:'register',component:RegisterPagesComponent},
  {path:'login',component:LoginPagesComponent},
  {path:'signup',component:SignupPagesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
