import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {

  angForm: FormGroup;
  constructor( private fb: FormBuilder, private bs: BusinessService ) { 
    this.createForm();
  }
  createForm(){
    this.angForm = this.fb.group({
      person_name: ['', Validators.required],
      business_name: ['', Validators.required],
      business_gst_number: ['', Validators.required]
    });
  }

  addBusiness(formObject){
    this.bs.addBusiness(formObject.person_name.value,formObject.business_name.value, formObject.business_gst_number.value);
  }

  ngOnInit() {
  }

}
