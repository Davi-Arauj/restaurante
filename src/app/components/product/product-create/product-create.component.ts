import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }

  showMessage(){
    this.productService.showMessage("Produto Criado com Sucesso!");
  }
  cancel(){
    this.productService.cancel()
  }
}
