import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioContatoComponent } from './pages/formulario-contato/formulario-contato.component';
import { ListaContatosComponent } from './pages/lista-contatos/lista-contatos.component';
import { PerfilContatoComponent } from './pages/perfil-contato/perfil-contato.component';

const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioContatoComponent
  },
  {
    path: 'formulario/:id',
    component: FormularioContatoComponent
  },
  {
    path: 'lista-contatos',
    component: ListaContatosComponent
  },
  {
    path: 'perfil-contato/:id',
    component: PerfilContatoComponent
  },
  {
    path: '',
    redirectTo: 'lista-contatos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
