import { Component, OnInit, Input } from '@angular/core';
import { CarritoInterface } from 'src/app/interfaces/carrito-interface';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit {

  @Input() itemsCarrito: Array<any>;
  @Input() tablaOn : boolean;
  

  constructor() { }

  ngOnInit() {
      }

  remove(item: any){
  this.itemsCarrito.splice(this.itemsCarrito.indexOf(item), 1);
  localStorage.setItem("carrito", JSON.stringify(this.itemsCarrito));
  }
    
  }




