import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent implements OnInit {

  public  products :any; 
  searchMovie:string;

  constructor(private formBuilder:FormBuilder,  private apiService:ApiService,private router :Router,
    private loginservice: AuthenticationService) { }

  ngOnInit(): void {
     // load get all products
     this.getAllProducts();
  }

  public getAllProducts(){
    this.apiService.getProducts().subscribe( data => {
      // console.log(data);
      this.products = data;
    });
  }

  book(id){
    this.router.navigateByUrl('/products/details/'+id);
  }

  public search(){
    // console.log(this.searchMovie);

    // this.products.forEach(element => {
    //   console.log("Element : "+element);
    //   console.log(element['movName']);
    //   if((element['movName'].includes('searchMovie'))){
    //     console.log("entered if");
    //     this.products= element;

    //   }
    //   console.log("product"+this.products);
    //   console.log(this.products);
    // });
    
    // this.apiService.searchMovie(this.searchMovie).subscribe(data =>{
    //   this.products = data;
    // });
  }


  }

