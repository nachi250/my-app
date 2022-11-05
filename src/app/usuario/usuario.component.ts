import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../usuario-service.service';


interface Usuario {
  nombre: string,
  activo: string,
  dni: number,
  id: number,
}

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {

  usuarios:Usuario[] = [];

  constructor(private UsuarioServiceService: UsuarioServiceService) { }

  ngOnInit(): void {
    this.getUsuarios()
  }


    getUsuarios(): void{
    this.usuarios = this.UsuarioServiceService.getUsers();
    }

    enable(nombre){
     const userEnable = this.usuarios.find(user => user.nombre === nombre)
     console.log('userEnable', userEnable)
     userEnable.activo = 'Activo';
    }

    disabled(nombre){
      const userDisable = this.usuarios.find(user => user.nombre === nombre)
      console.log('userDisable', userDisable)
      userDisable.activo = 'Inactivo';
    }
    
    

}
