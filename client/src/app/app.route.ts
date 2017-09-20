import {RegisterComponent} from './modules/registration/register.component';
import {LoginComponent} from './modules/login/login.component';
import{ContactDetailsComponent} from './modules/contacts/contact.component';
export const route=[
{path:'',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'contactDetails', component:ContactDetailsComponent}
]