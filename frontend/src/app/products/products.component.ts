import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe((data: Product[]) => {
      console.log(data)
      this.products = data;
    })
  }

}
