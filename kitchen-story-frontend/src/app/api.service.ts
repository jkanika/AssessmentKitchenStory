import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url :string = "http://localhost:9011/products";
  private url1 :string = "http://localhost:9011/sign-up";
  private signin :string = "http://localhost:9011/sign-in";


  constructor(private httpClient:HttpClient) { }

  public getProducts(){
    return this.httpClient.get(this.url);
  }

  public getOneProduct(id:string){
    return this.httpClient.get(`${this.url}/${id}`);
  }

  public createProduct(product:any){
    return this.httpClient.post(`${this.url}`,product);
  }

  public editProduct(id:string,product:any){
    return this.httpClient.put(`${this.url}/${id}`,product);
  }

  public deleteProduct(id:string){
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  public createUser(user:any){
    //console.log(user);
    return this.httpClient.post(`${this.url1}`,user);
  }

  public loginUser(user:any){
    //console.log(user);
    return this.httpClient.post(`${this.signin}`,user);
  }
}
