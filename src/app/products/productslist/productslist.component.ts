import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-productslist',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './productslist.component.html',
  styleUrl: './productslist.component.css'
})
export class ProductslistComponent implements OnInit {
  products: any[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.store.getAllProducts().subscribe(products => {
      this.products = products;
    })
    
  }


  constructor(private store: ProductsService) {}

}
