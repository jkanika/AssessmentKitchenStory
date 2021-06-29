import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public paymentForm :FormGroup;
  submitted: boolean;
  public total : any;
  public amount :string;
  public order : any;

  // DI -> by adding properties in constrctor.
  constructor(private formBuilder:FormBuilder, private route: ActivatedRoute, private apiService:ApiService, 
    private router :Router, private movieSession: AuthenticationService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params=>{ 
      // console.log(params);
      this.amount= params.amount;
      //this.apiService.getOneProduct(this.id).subscribe(data=>{
        //console.log(data);
        //this.product = data;
      });

    this.paymentForm = this.formBuilder.group({
      cvv : ['',[Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      cardno :['',[Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      cardex: ['',Validators.required]
    });
  }

  public hasError(field:any){
    return (this.paymentForm.get(field).invalid && this.paymentForm.get(field).touched 
    && this.paymentForm.get(field).errors);
  }

  public submitForm(form:any){
    // console.log(form);
    if(form.valid) {
      this.submitted  = true;
      //console.log(this.signUpForm.value);
      // if product is valid 
        alert("Payment successful..!")
        this.router.navigateByUrl('/user-products');
      // alert("Payment successful..!")
      // this.router.navigateByUrl('/user-movies');
      /*this.apiService.createUser(this.paymentForm.value).subscribe(res=>{
        alert("Account Created..!")
        this.router.navigateByUrl('/sign-in');
      });*/
    } else{
      this.validateForm(form);
    }
    //console.log(this.paymentForm.value);
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

  get cvv() { return this.paymentForm.get('cvv')}
  get cardno() { return this.paymentForm.get('cardno')}
  get cardex() { return this.paymentForm.get('cardex')}
}
