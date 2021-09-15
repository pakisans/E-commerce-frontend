import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product.model';
import { Category } from './category.model';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  productsForCart:Array<Product>
  productsRecived:Array<Product>
  cartProducts:any;

  allCategories: Array<any> = [];
  selectedCategoryId: number = 0;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      console.log(data)
      this.products = data;
    })
    let localData = localStorage.getItem('cart');
    if (localData !== null) {
      this.cartProducts = JSON.parse(localData);
    } else {
      this.cartProducts = [];
    }

    this.productService.getCategories().subscribe(res => {
      console.log(res)
      this.allCategories = res;
    });
    console.log(this.allCategories)
  }

  searchProducts() {
    console.log(this.selectedCategoryId)
    if(this.selectedCategoryId == 0) {
      this.productService.getProducts().subscribe((data: Product[]) => {
        console.log(data)
        this.products = data;
      })
    } else {
      this.productService.getProductsByCategory(this.selectedCategoryId).subscribe(res => {
        console.log(res)
        this.products = res;
      })
    }
  }

  // handleSuccessfulResponse(response) {

  //   this.productsForCart = new Array<Product>();
  //   this.productsRecived = response;
  //   for (const product of this.productsRecived) {

  //     const productwithRetrievedImageField = new Product();
  //     productwithRetrievedImageField.id = product.id;
  //     productwithRetrievedImageField.name = product.name;
  //     productwithRetrievedImageField.price = product.price;
  //     productwithRetrievedImageField.description = product.description;
  //     productwithRetrievedImageField.image = 'data:image/jpeg;base64,';
  //     this.productsForCart.push(productwithRetrievedImageField);
  //   }
  // }

  // addToCart(productId) {
  //   let product = this.productsForCart.find(product => {
  //     return product.id === +productId;
  //   });

  //   let cartData = [];
  //   let data = localStorage.getItem('cart');

  //   if (data !== null) {
  //     cartData = JSON.parse(data);
  //   }
  //   cartData.push(product);
  //   this.updateCartData(cartData);
  //   localStorage.setItem('cart', JSON.stringify(cartData));
  //   product.isAdded = true;
  // }

  // updateCartData(cartData) {
  //   this.cartProducts = cartData;
  // }

}
