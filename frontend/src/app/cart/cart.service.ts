import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCart: Array<any> = [];
  private cartItems: Array<any> = [];

  constructor() { }

  getProductsInCart() {
    return this.productsInCart;
  }
  getCartItems() {
    return this.cartItems;
  }
}
