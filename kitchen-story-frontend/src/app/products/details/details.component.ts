import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Observable, Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

@Injectable({
  providedIn: 'root'
  })

export class DetailsComponent implements OnInit {

  public count = 1 ;
  public total = 0;
  public id: string ;
  public product:any;

  constructor(private route: ActivatedRoute, private apiService:ApiService, private router :Router,
    private movieService: AuthenticationService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{ 
      this.id= params.id;
      this.apiService.getOneProduct(this.id).subscribe(data=>{
        this.product = data;
        this.total= this.count*this.product['price'];
      });
    });
  }
  public increaseCount(event){
    this.count +=1;
    this.total = this.product['price']*this.count;
  }

  public payment(amount){
    this.router.navigateByUrl('/payment/'+amount);
  }
}
