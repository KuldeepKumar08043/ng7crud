import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  url = 'http://localhost:4000/business';
  constructor( private http: HttpClient ) { }

  // add data in DB
  addBusiness(person_name, business_name, business_gst_number){
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    console.log(obj);
    this.http.post(`${this.url}/add`, obj).subscribe(res => console.log('done'));
  }
  //fetch data from DB
  getBusinesses(): Observable<any>{
    return this.http.get(this.url);
  }

  //edit operation
  editBusiness(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
    }

  //Update data in DB
  updateBusiness(angFormData, id){
    console.log('angFormData = ', angFormData);
    const obj = {
      person_name: angFormData.person_name.value,
      business_name: angFormData.business_name.value,
      business_gst_number: angFormData.business_gst_number.value
    }
    this.http.post(`${this.url}/update/${id}`, obj).subscribe(res => {
      console.log('Done');
    })
  }

  //Delete selected form data
  deleteBusiness(id){
    return this.http.get(`${this.url}/delete/${id}`);
  }
}
