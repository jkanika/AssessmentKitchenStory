import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  public orders:any;

  constructor(private route: ActivatedRoute, private apiService:ApiService, private router :Router,
    private orderService: AuthenticationService) { }

  ngOnInit(): void {
    this.orders=this.orderService.getAllOrders();
  }

}
