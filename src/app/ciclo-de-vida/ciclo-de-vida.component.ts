import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit {

  nombre: string = 'yerba'
  cantidad: number = 5

  productos: any[] = []

  constructor() { 
    console.log(' constructor ciclo de vida component')
  }

  ngOnInit(): void {
    this.agregarProducto();
    console.log('ngOnInit en ciclo de vida compoenent')
  }

  agregarProducto(){
    this.productos.push(
      {
      nombre: this.nombre,
      cantidad: this.cantidad,}
    )
    this.nombre = null;
    this.cantidad = null;
  }

  modificarPrimerProducto(){
    this.productos[0].nombre = 'modificado';
  }

  eliminarPrimerProducto(){
    this.productos.splice(0, 1);
  }
}
