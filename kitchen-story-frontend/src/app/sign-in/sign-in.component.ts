import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public signInForm: FormGroup;
  submitted: boolean;
  public data : any;

  constructor(private formBuilder:FormBuilder,  private apiService:ApiService,private router :Router,
    private loginservice: AuthenticationService) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email : ['',Validators.required],
      pass : ['',Validators.required],
      role : ['',Validators.required]
    });
  }

  public hasError(field:any){
    return (this.signInForm.get(field).invalid && this.signInForm.get(field).touched 
    && this.signInForm.get(field).errors);
  }

  public submitForm(form:any){
    // console.log(form);
    if(form.valid) {
      this.submitted  = true;
      console.log(this.signInForm.value);
      // if product is valid 
      this.apiService.loginUser(this.signInForm.value).subscribe(res=>{
        if(res !=null){
          console.log("Sign in Email : ");
          console.log(res['email']);
          if (this.loginservice.authenticate(res['email'])) {
            alert("Login successful!");
            if(res['role'] =="admin"){
                this.router.navigateByUrl('/products');
            } else{
              this.router.navigateByUrl('/user-products');
            }
        }     
      } else { alert("User not found!") }
      });

    } else{
      this.validateForm(form);
    }
    console.log(this.signInForm.value);
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

  get role() { return this.signInForm.get('role')}
  get email() { return this.signInForm.get('email')}
  get pass() { return this.signInForm.get('pass')}
}
