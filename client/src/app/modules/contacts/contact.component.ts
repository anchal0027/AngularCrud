import {Component,OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import {ApiService} from '../../Apiservice/apiservice';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Router} from '@angular/router';
	@Component({
		selector:"contact",
		templateUrl:'./contact.html',
		providers:[ApiService]

	})
	export class ContactDetailsComponent{
		data:any;
		result:any;
		idData:any;
		editData:boolean=false;
		contactForm:FormGroup;
		editForm:FormGroup;
		myData:String;
		constructor(private http:Http ,private apiservice:ApiService , private router:Router, fb:FormBuilder ){
			this.contactForm=fb.group({
				firstname:['',Validators.required],
				lastname:['',Validators.required],
				city:['',Validators.required],
				phone:['',Validators.required]
			})
			this.editForm=fb.group({
				firstname:['',Validators.required],
				lastname:['',Validators.required],
				city:['',Validators.required],
				phone:['',Validators.required]
			})
			
		}
		ngOnInit(){
			this.refreshdata()
		}
		refreshdata(){
			this.apiservice.contactData().subscribe((data)=>{
				if(data.error){
					alert("token expires");
					this.router.navigate(['/login'])
				}
				else{
				this.data=data;	
				}
				
			})
		}
		addContact(addDetails:any){
			this.apiservice.addContact(addDetails).subscribe((res)=>{
				console.log(">>>>>>>>>>>response",res);
			    this.contactForm.reset();
			    this.refreshdata();
			})
		}
		getIdData(id:any){
			this.apiservice.getDataById(id).subscribe((idData)=>{
				this.editData=true;
				this.myData=idData;
			})
		}
		updateContact(updateDetails:any,id:any){
		 	this.apiservice.updateContact(updateDetails,id).subscribe(res=>{
		 		this.editForm.reset();
		 		this.refreshdata();
		 	 	console.log(">>>>>>>>>>>>>>>>>>>>>>.updated");
		 	})
		 }
		DeleteContact(value:any){
			console.log(">>>>>>>>>>>>>>.value is",value);
			this.apiservice.delete(value).subscribe((res)=>{
				this.result=res
				this.refreshdata();
			})
		}

	}