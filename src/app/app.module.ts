import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Componentes
import { PrimerComponent } from './primero/primero.component';
import { SegundoComponent } from './segundo/segundo.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivasComponent } from './directivas/directivas.component';

import { LoginComponent } from './components/login/login.component'

// Angular Material
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

 // Reactive Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductoComponent } from './components/producto/producto.component';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';
import { CicloProductoComponent } from './ciclo-de-vida/ciclo-producto/ciclo-producto.component';
import { DirectivasPersonalizadasComponent } from './directivas-personalizadas/directivas-personalizadas.component';

import { ResaltarDosDirective } from './directivas-personalizadas/resaltar-dos.directive';
import { ResaltarHostListenerDirective } from './directivas-personalizadas/resaltar-host-listener.directive';
import { UsuarioComponent } from './usuario/usuario.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';

import { UserDetailComponent } from './user-detail/user-detail.component';

import { HttpClientModule } from '@angular/common/http';

import { FormComponent } from './form/form.component';

import { InputErrorStateMatcherExample } from './input-error-state-matcher-example/input-error-state-matcher-example.component'

import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';








@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    SegundoComponent,
    DataBindingComponent,
    DirectivasComponent,
    LoginComponent,
    ProductoComponent,
    CicloDeVidaComponent,
    CicloProductoComponent,
    DirectivasPersonalizadasComponent,
    ResaltarDosDirective,
    ResaltarHostListenerDirective,
    UsuarioComponent,
    NuevoUsuarioComponent,
    UserDetailComponent,
    FormComponent,
    InputErrorStateMatcherExample,
    NameEditorComponent,
    ProfileEditorComponent,








  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,  

    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
