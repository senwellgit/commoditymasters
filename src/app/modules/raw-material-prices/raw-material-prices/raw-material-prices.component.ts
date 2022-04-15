import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-raw-material-prices',
  templateUrl: './raw-material-prices.component.html',
  styleUrls: ['./raw-material-prices.component.scss']
})
export class RawMaterialPricesComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  logIn(){
  this.router.navigate(['/rawMaterialPricesSection']);
  }

}
