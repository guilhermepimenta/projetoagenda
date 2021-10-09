import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PaginaInicialComponent } from "./pagina-inicial/pagina-inicial.component";
import { CadastroTarefasComponent } from "./cadastro-tarefas/cadastro-tarefas.component";
import { ConsultaTarefasComponent } from "./consulta-tarefas/consulta-tarefas.component";
import { EdicaoTarefasComponent } from "./edicao-tarefas/edicao-tarefas.component";

const routes: Routes = [
    { path: '', component: PaginaInicialComponent }, 
    { path: 'cadastro-tarefas', component: CadastroTarefasComponent }, 
    { path: 'consulta-tarefas', component: ConsultaTarefasComponent }, 
    { path: 'edicao-tarefas/:id', component: EdicaoTarefasComponent } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}