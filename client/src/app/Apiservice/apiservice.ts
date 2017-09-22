import{Injectable} from '@angular/core';
import{Http , Response} from '@angular/http';
import {InterceptorService} from './interceptorservice';
import 'rxjs/add/operator/map';
@Injectable()
export class ApiService{
	constructor(private http:InterceptorService){
	}
	register(value:any){
		return this.http.post('http://localhost:3000/api/register',value).map(res=>res.json());
	}
	login(value:any){
		return this.http.post('http://localhost:3000/api/login',value).map(res=>res.json());
	}
	contactData(){
		return this.http.get('http://localhost:3000/api/contacts').map(res=>res.json());
	}
	addContact(data){
		return this.http.post('http://localhost:3000/api/addContact',data).map(res=>res.json());
	}
	getDataById(id){
		return this.http.get('http://localhost:3000/api/getContactById/'+id).map(res=>res.json());
	}
	updateContact(data,id){
		return this.http.put('http://localhost:3000/api/updateContact/'+id,data).map(res=>res.json());
	}
	delete(id){
		return this.http.delete('http://localhost:3000/api/contact/'+id).map(res=>res.json());
	}
}