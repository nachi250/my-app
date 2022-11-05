import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: 'full' },
  { path: 'home', component: UsuarioComponent },
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'form', component: FormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
