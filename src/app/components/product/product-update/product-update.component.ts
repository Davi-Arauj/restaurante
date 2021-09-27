import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  newProduct: Product = {

    amount: undefined,
    description: "",
    price: undefined
  }
  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    var id :any 
    id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.productService.readById(id).subscribe(product => {
      this.newProduct = product
    });
  }

  updateProduct(): void { }
  cancel(): void {
    this.router.navigate(['/products'])
  }


}
