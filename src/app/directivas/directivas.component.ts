import { Component, OnInit } from '@angular/core';

interface Usuario {
  nombre: string;
  codPostal: string;
  password: number;

}

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  nombre = '';
  codPostal = '';
  password;

  usuarios: Usuario[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  get tipoErrorPass(): string {
    if(!this.password || this.password.length === 0) {
      return 'requerido';
    }

    if (this.password.length < 6) {
      return 'longitud';
    }

    const ultLetra: string = this.password.substr(this.password.length - 1, 1)

    if(isNaN(parseInt(ultLetra, 10))){
      return 'numero';
    }
    return null;
  }

  guardar() {
    const data: Usuario = {
      nombre: this.nombre,
      codPostal: this.codPostal,
      password: this.password
    }

    console.log('data', data);

    this.usuarios.push(data);

    console.log('this.usuarios', this.usuarios )
  }

}
