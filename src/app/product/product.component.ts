import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from 'src/app/models/product.model';

//prettier-ignore
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products = [];
  constructor(private productsService: ProductsService) {}

  async ngOnInit(): Promise<void> {
    //@ts-ignore
    this.products = await this.productsService.getProducts();
    console.log(this.products);
    //console.log(this.products[0]);
  }
}
