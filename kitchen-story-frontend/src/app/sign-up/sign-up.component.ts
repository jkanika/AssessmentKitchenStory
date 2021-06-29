import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signUpForm: FormGroup;
  submitted: boolean;

  constructor(private formBuilder:FormBuilder,  private apiService:ApiService,private router :Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      fname : ['',Validators.required],
      lname : ['',Validators.required],
      phone : ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email : ['',Validators.required],
      pass :['',Validators.required],
    });

  }

  public hasError(field:any){
    return (this.signUpForm.get(field).invalid && this.signUpForm.get(field).touched 
    && this.signUpForm.get(field).errors);
  }

  public submitForm(form:any){
    // console.log(form);
    if(form.valid) {
      this.submitted  = true;
      //console.log(this.signUpForm.value);
      // if product is valid 
      this.apiService.createUser(this.signUpForm.value).subscribe(res=>{
        console.log(res);
        if(res != null){
          alert("Account Created..!")
          this.router.navigateByUrl('/sign-in');
        } else{
          alert("User already exists, Please sign in!")
          this.router.navigateByUrl('/sign-in');
        }
        
      });

    } else{
      this.validateForm(form);
    }
    console.log(this.signUpForm.value);
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

  get fname() { return this.signUpForm.get('fname')}
  get lname() { return this.signUpForm.get('lname')}
  get phone() { return this.signUpForm.get('phone')}
  get email() { return this.signUpForm.get('email')}
  get pass() { return this.signUpForm.get('pass')}
}
