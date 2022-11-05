import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Producto {
  nombre: string;
  cantidad: number;
}

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() nombre: string ;
  @Input() cantidad: number;
  @Output() comprarEvento = new EventEmitter<Producto>();

  constructor() { }
  
  ngOnInit(): void {
  } 

  comprar(){
    const data: Producto = { nombre: this.nombre, cantidad: this.cantidad }
      this.comprarEvento.emit(data);
  }

}
