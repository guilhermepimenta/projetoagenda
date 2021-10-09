import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';
import { TarefasService } from '../services/tarefas.service';

@Component({
  selector: 'app-consulta-tarefas',
  templateUrl: './consulta-tarefas.component.html',
  styleUrls: ['./consulta-tarefas.component.css']
})
export class ConsultaTarefasComponent implements OnInit {

  listagem: Tarefa[] = [];
  tarefa: Tarefa = {idTarefa: 0, nome: '', data: '', hora: '', descricao: '', prioridade:''};
  pagina = 1;

  constructor(
    private tarefasService: TarefasService
  ) { }

  ngOnInit(): void {
    this.listagem = this.tarefasService.consultar();    
  }

  onPageChange(event: any): void{
    this.pagina = event;
  }

  obterTarefa(id: number): void{
    this.tarefa = this.tarefasService.obterPorId(id);
  }

  excluirTarefa(): void{
    this.tarefasService.excluir(this.tarefa);
    this.ngOnInit();
  }

}
