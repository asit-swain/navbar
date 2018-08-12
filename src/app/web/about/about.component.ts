import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  title: string = "product details"
  productCode: string = "PROD_P001";
  productName: string = "Apple MPTT2 MacBook Pro"
  productPrice: number = 217021;
  purchaseDate: string = "1/17/2018"
  productTax: string = "0.1";
  productRating: number = 4.92;
  }
