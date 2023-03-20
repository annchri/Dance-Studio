import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { PortfolioPagesComponent } from './pages/portfolio-pages/portfolio-pages.component';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';
import { SinglePagesComponent } from './pages/single-pages/single-pages.component';
import { RegisterPagesComponent } from './pages/register-pages/register-pages.component';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { SignupPagesComponent } from './pages/signup-pages/signup-pages.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { SafePipe } from './safe.pipe';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';


@NgModule({
  declarations: [
    AppComponent,
    HomePagesComponent,
    NavbarComponent,
    FooterComponent,
    AboutPagesComponent,
    PortfolioPagesComponent,
    ContactPagesComponent,
    SinglePagesComponent,
    RegisterPagesComponent,
    LoginPagesComponent,
    SignupPagesComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
