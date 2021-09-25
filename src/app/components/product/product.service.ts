import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl ="https://meuboteco.herokuapp.com/api/v1/product";
  constructor(private snackBar: MatSnackBar,
    private http : HttpClient,
    private router : Router
    ) { }


  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(product: Product) :Observable<Product>{
    return this.http.post<Product>(this.baseUrl,product)
  }

  cancel(){
    this.router.navigate(['/products'])
  }
}
