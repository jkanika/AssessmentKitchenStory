import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  public  products :any;
  public delFlag : boolean;
  constructor(private apiService: ApiService, private router :Router) { }

  ngOnInit(): void {
    // load get all products
    this.getAllProducts();
  }

  public getAllProducts(){
    this.apiService.getProducts().subscribe( data => {
      console.log(data);
      this.products = data;
    });
  }

  create(){
    this.router.navigateByUrl('/products/create');
  }

  view(id){
    this.router.navigateByUrl('/products/details/'+id);
  }

  delete(id,name){
    if(confirm("Are you sure you want to delete movie : "+name)){
      this.apiService.deleteProduct(id).subscribe(res =>{
        this.getAllProducts();
    });
    } else{
      this.getAllProducts();
    }
  
      
  }

  edit(id){
    this.router.navigateByUrl('/products/update/'+id);
  }
}
