import {Component } from '@angular/core';
import {Http,Response} from '@angular/http';
import {ApiService} from '../../Apiservice/apiservice';
	@Component({
		selector:"contact",
		templateUrl:'./contact.html',
		providers:[ApiService]

	})
	export class ContactDetailsComponent{
		data:any;
		constructor(private http:Http ,private apiservice:ApiService ){
			this.apiservice.contactData().subscribe((data)=>{
				console.log(">>>>>>>>>>>>>>.data is",data);
				this.data=data;
			})
		}

	}