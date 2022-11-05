import { Component, OnInit } from '@angular/core';
import { ConfigService, User } from './config.service';
import { UsuarioServiceService } from './usuario-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsuarioServiceService, ConfigService]

})


export class AppComponent implements OnInit {
  title = 'my-app';
  users: User[] = [];


  constructor(private UsuarioServiceService:UsuarioServiceService, private ConfigService: ConfigService){ }

  ngOnInit(): void {
    this.ConfigService.getUsers().subscribe(data => this.users = data.data);
    

  }
    
}
