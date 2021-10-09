import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';

@Injectable()
export class TarefasService {

  tarefas: Tarefa[] = [
    {idTarefa: 1,
     nome: 'Aula de Angular',
     data: '2021-10-02',
     hora: '13:30',
     descricao: 'Aula de desenvolvimento frontend',
     prioridade: '1'
    },
    {idTarefa: 2,
     nome: 'Aula de .Net',
     data: '2021-10-03',
     hora: '08:00',
     descricao: 'Aula de desenvolvimento web MVC',
     prioridade: '2'
    },
    {idTarefa: 3,
     nome: 'Aula de Java',
     data: '2021-10-04',
     hora: '09:00',
     descricao: 'Aula de desenvolvimento de APis',
     prioridade: '3'
    },
    {idTarefa: 4,
     nome: 'Aula de Banco de Dados',
     data: '2021-10-04',
     hora: '14:00',
     descricao: 'Aula de modelagem de SQL',
     prioridade: '1'
    },
    {idTarefa: 5,
     nome: 'Aula de Java Web',
     data: '2021-10-11',
     hora: '15:00',
     descricao: 'Aula de Java Spring Boot',
     prioridade: '3'
    }
  ]

  constructor() { }

  gerarId(): number{
    let id=0;
    this.tarefas.forEach(function(item){
      if(id < item.idTarefa){
        id = item.idTarefa
      }
    });
    return id + 1;
  }

  cadastrar(tarefa: Tarefa): void{
    this.tarefas.push(tarefa);
  }

  excluir(tarefa: Tarefa) : void {
    this.tarefas.splice(this.tarefas.indexOf(tarefa), 1);
  }

  atualizar(tarefa: Tarefa) : void {
    const position = this.tarefas.findIndex(t => t.idTarefa === tarefa.idTarefa);
    this.tarefas[position] = tarefa;
  }

  obterPorId(id: number) : Tarefa {
    const position = this.tarefas.findIndex(t => t.idTarefa === id);
    return this.tarefas[position];
  }

  consultar(): Tarefa[]{
    return this.tarefas;
  }


}
