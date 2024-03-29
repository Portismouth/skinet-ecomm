import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ShopComponent
  ]
})
export class ShopModule { }
