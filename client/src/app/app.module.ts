import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
// import { HttpModule,Http,  XHRBackend,RequestOptions, } from '@angular/http';
import {RouterModule} from '@angular/router';
import {route} from './app.route'
import { AppComponent } from './app.component';
import {RegisterComponent} from './modules/registration/register.component';
import {LoginComponent} from './modules/login/login.component';
import{ContactDetailsComponent} from './modules/contacts/contact.component';
import { HttpModule,Http, XHRBackend, RequestOptions } from '@angular/http';
import { BaseRequestOptions } from '@angular/http';
import { InterceptorService} from './Apiservice/interceptorservice';
import { httpfactory} from './Apiservice/httpfactory';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    FormsModule,
     ReactiveFormsModule,
     HttpModule
  ],
 providers: [
        { provide: Http,
         useFactory: httpfactory,
         deps: [XHRBackend, RequestOptions]
    }, InterceptorService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
