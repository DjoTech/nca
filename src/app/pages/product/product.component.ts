import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {


  selectedProduct = 3;

  selectProduct(productId: number) {
    this.selectedProduct = productId;
  }
}
