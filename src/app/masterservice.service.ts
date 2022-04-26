import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterserviceService {

 
  constructor(private http:HttpClient) { }



getData(head_id: any, type_id: any,){
  return this.http.get(environment.base_url+`?head_id= ${head_id}&type_id=${type_id}`);
  
}

getHead(){
  return this.http.get(environment.base_url + 'head')
}

gettypebyheadid(id:any){
  console.log(environment.base_url + 'type/'+''+id);
  return this.http.get(environment.base_url + 'type/'+''+id)
}
}


