import { Component, OnInit, Input } from '@angular/core';
import { UsuarioServiceService } from '../usuario-service.service';


@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css'],

})
export class NuevoUsuarioComponent implements OnInit {
  @Input()nombre: string;

  constructor(private UsuarioServiceService:UsuarioServiceService) { }

  ngOnInit(): void {
  }

  addNewUser(nombre: string) {
    console.log('addNewUser', nombre)
    this.UsuarioServiceService.createUser(nombre);
  }

}
