import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CadastroTarefasComponent } from './cadastro-tarefas/cadastro-tarefas.component';
import { ConsultaTarefasComponent } from './consulta-tarefas/consulta-tarefas.component';
import { TarefasService } from './services/tarefas.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChartModule } from 'angular-highcharts';
import { EdicaoTarefasComponent } from './edicao-tarefas/edicao-tarefas.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    CadastroTarefasComponent,
    ConsultaTarefasComponent,
    EdicaoTarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ChartModule
  ],
  providers: [TarefasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
