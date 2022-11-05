import { Injectable } from '@angular/core';


export interface Usuario {
  nombre: string,
  activo: string,
  dni: number,
  id: number,
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {


  usuarios: Usuario[] = [
    {id: 1 ,nombre: 'Juan', activo: 'Activo', dni: 11111111},
    {id: 2 ,nombre: 'Sebastian', activo: 'Activo', dni: 11111111},
    {id: 3 ,nombre: 'Matias', activo: 'Activo', dni: 11111111}
  ];

  constructor() { }

  getUsers(): Usuario[] {
    return this.usuarios
  }

  getUser(id): Usuario[] {
    return this.usuarios.filter(user => user.id === id)
  }


  createUser(nombre: string){
    const user: Usuario = {id: this.usuarios.length + 1, nombre: nombre, activo: 'Activo', dni: 11111111}
    this.usuarios.push(user);
    console.log('usuarios', this.usuarios)

  }

  //logUser(value: string){
  //  console.log('Valor provider', value )
  //}

}
