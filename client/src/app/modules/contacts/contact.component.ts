import {Component } from '@angular/core';
import {Http,Response} from '@angular/http';
import {ApiService} from '../../Apiservice/apiservice';
import {Router} from '@angular/router';
	@Component({
		selector:"contact",
		templateUrl:'./contact.html',
		providers:[ApiService]

	})
	export class ContactDetailsComponent{
		data:any;
		constructor(private http:Http ,private apiservice:ApiService , private router:Router ){
			this.apiservice.contactData().subscribe((data)=>{
				console.log(">>>>>>>>>>>>>>.data is",data);
				if(data.error){
					alert("token expires");
					this.router.navigate(['/login'])
				}
				else{
				this.data=data;	
				}
				
			})
		}

	}