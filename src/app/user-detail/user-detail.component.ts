import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioServiceService } from '../usuario-service.service';

interface Usuario {
  nombre: string,
  activo: string,
  dni: number,
  id: number,
}

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  id: any;
  usuario: Usuario[];
  user:Usuario[];


  constructor(
    private UsuarioServiceService:UsuarioServiceService, 
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params;

    console.log('Id:', this.id.id);
    this.usuario = this.UsuarioServiceService.getUsers().filter(user => user.id == this.id.id );
    console.log(this.usuario)
  }

  resultAsync = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve('Este es un resultado asincrono con pipe')
    }, 3000);
  })

}
