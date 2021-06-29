import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public productForm :FormGroup;
  submitted: boolean;

  // DI -> by adding properties in constrctor.
  constructor(private formBuilder:FormBuilder, private apiService:ApiService,private router :Router) { }

  ngOnInit(): void {

    this.productForm = this.formBuilder.group({
      name : ['',Validators.required],
      cuisine :['',Validators.required],
      price :['',Validators.required],
    });

  }

  public hasError(field:any){
    return (this.productForm.get(field).invalid && this.productForm.get(field).touched 
    && this.productForm.get(field).errors);
  }

  public submitForm(form:any){
    // console.log(form);
    if(form.valid) {
      this.submitted  = true;
      //console.log("Submitted");
      // if product is valid 
      alert("Product Created..!")
      this.apiService.createProduct(this.productForm.value).subscribe(res=>{
        this.router.navigateByUrl('/products');
    });

  }else{
      this.validateForm(form);
    }
    // console.log(this.productForm.value);
  }

  validateForm(form:any){
    Object.keys(form.controls).forEach(field=>{
      const control = form.get(field);
      if( control instanceof FormControl){
        control.markAsTouched({ onlySelf : true })
      } else{
        this.validateForm(control);
      }
    })
  }

  get name() { return this.productForm.get('name')}
  get cuisine() { return this.productForm.get('cuisine')}
  get price() { return this.productForm.get('price')}

}