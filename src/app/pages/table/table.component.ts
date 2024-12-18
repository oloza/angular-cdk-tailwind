import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit{

  products:Product[] = [];
  columns:string[] = ['cover','#nro','title','price']; 

constructor(private http:HttpClient) { }
  
  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data=>{
      this.products=data;
    })    
  }    
}
