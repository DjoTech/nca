import { Component } from '@angular/core';

import {MOBILE_BREAKPOINT, PRODUCT, RESPONSIVE_OPTIONS, TABLE_BREAKPOINT} from "../../../data/constant";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  product = PRODUCT

  selectedProduct = 0;

  selectProduct(productId: number) {
    this.selectedProduct = productId;
  }

}
