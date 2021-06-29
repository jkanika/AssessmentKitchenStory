import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  public orders:any;

  authenticate(fname) {
    //if (username === "javainuse" && password === "password") {
      console.log("fname : "+fname);
      sessionStorage.setItem('username', fname)
      return true;
    }// else {
      //return false;
    //}
  
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

  movieSession(movieId){
    sessionStorage.setItem('movie',movieId);
    console.log("Movie Id : "+movieId);
  }

  movieSessionLogout() {
    sessionStorage.removeItem('movie')
  }

  setAllOrders(data){
    console.log("setting of order :");
    console.log(data);
    this.orders = data;
  }

  getAllOrders(){
    console.log("Getting of order :");
    console.log(this.orders);
    return this.orders;
  }
}
