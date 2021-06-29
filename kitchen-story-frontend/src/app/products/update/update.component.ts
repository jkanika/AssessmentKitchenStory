import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public editForm :FormGroup;
  submitted: boolean;
  public id : any;

  constructor(private formBuilder:FormBuilder,private apiService:ApiService,private router :Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.editForm = this.formBuilder.group({
      name : [''],
      cuisine :[''],
      price :[''],
    });

    this.route.params.subscribe(params=>{ 
      console.log(params);
      this.id= params.id;
      console.log(this.id);
    });
  }


  public submitForm(form:any){
    // console.log(form);
      this.submitted  = true;
      console.log("Submitted");
      console.log(this.id);
      console.log(this.editForm.value);
      // if product is valid 
      this.apiService.editProduct(this.id,this.editForm.value).subscribe(res=>{
        this.router.navigateByUrl('/products');
    });
    // console.log(this.productForm.value);
  }

  get name() { return this.editForm.get('name')}
  get cuisine() { return this.editForm.get('cuisine')}
  get price() { return this.editForm.get('price')}
}