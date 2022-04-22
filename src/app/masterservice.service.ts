import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterserviceService {

 
  constructor(private http:HttpClient) { }



getData(){
  return this.http.get(environment.base_url+"?head_id=1&type_id=1");
}
}


