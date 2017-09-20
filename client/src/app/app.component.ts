import { Component } from '@angular/core';
import {RegisterComponent} from './modules/registration/register.component';
import {LoginComponent} from './modules/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
