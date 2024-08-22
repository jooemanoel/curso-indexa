import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ContainerComponent } from './components/container/container.component';
import { ContatoComponent } from './components/contato/contato.component';
import { MensagemErroComponent } from './components/mensagem-erro/mensagem-erro.component';
import { SeparadorComponent } from './components/separador/separador.component';
import { FormularioContatoComponent } from './pages/formulario-contato/formulario-contato.component';
import { ListaContatosComponent } from './pages/lista-contatos/lista-contatos.component';
import { PerfilContatoComponent } from './pages/perfil-contato/perfil-contato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ContainerComponent,
    ContatoComponent,
    MensagemErroComponent,
    SeparadorComponent,
    FormularioContatoComponent,
    ListaContatosComponent,
    PerfilContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
