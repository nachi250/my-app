import { Component, OnInit } from '@angular/core';
import { ProductoComponent } from '../components/producto/producto.component';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  nombre = 'Nacho'
  saludo = 'Hola'

  nombreProducto = 'yerba';
  cantidadProducto = 25;
  constructor() { }

  ngOnInit(): void {}

  guardar(){
    console.log('This.nombre', this.nombre)
  }

  eventoComprar(data: ProductoComponent | any){
    console.log('comprar producto', data)
  }


}
