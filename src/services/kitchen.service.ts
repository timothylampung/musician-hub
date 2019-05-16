import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class KitchenService {

  constructor(private http: HttpClient){}

  getAvailablePorts(){
   return this.http.get('http://127.0.0.1:8000/quickstart/ports');
  }

  cook(result){
    console.log('cooking');
   return this.http.post('http://127.0.0.1:8000/quickstart/cooks', JSON.stringify(result), httpOptions);
  }

  cookStatus(result){
    console.log('cooking');
   return this.http.post('http://127.0.0.1:8000/quickstart/cooking-status', JSON.stringify(result), httpOptions);
  }


}
