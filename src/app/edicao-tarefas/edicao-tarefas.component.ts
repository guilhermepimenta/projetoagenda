import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TarefasService } from '../services/tarefas.service';
import { Tarefa } from '../models/tarefa.model';

@Component({
  selector: 'app-edicao-tarefas',
  templateUrl: './edicao-tarefas.component.html',
  styleUrls: ['./edicao-tarefas.component.css']
})
export class EdicaoTarefasComponent implements OnInit {

  mensagem: string = "";

  constructor(private tarefasService: TarefasService,
              private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const idTarefa = this.activatedRoute.snapshot.paramMap.get('id') as string;
    const tarefa = this.tarefasService.obterPorId(parseInt(idTarefa));

    this.formEdicao.controls.idTarefa.setValue(tarefa.idTarefa);
    this.formEdicao.controls.nome.setValue(tarefa.nome);
    this.formEdicao.controls.data.setValue(tarefa.data);
    this.formEdicao.controls.hora.setValue(tarefa.hora);
    this.formEdicao.controls.descricao.setValue(tarefa.descricao);
    this.formEdicao.controls.prioridade.setValue(tarefa.prioridade);
  }

  formEdicao = new FormGroup({
    idTarefa: new FormControl('', []),
    nome: new FormControl('', [Validators.required, Validators.minLength(6)]),
    data: new FormControl('', [Validators.required]),
    hora: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required, Validators.minLength(10)]),
    prioridade: new FormControl('', [Validators.required])
  });

  get form(): any{
    return this.formEdicao.controls;
  }

  onSubmit(): void{

    var tarefa : Tarefa = {
      idTarefa: this.formEdicao.value.idTarefa,
      nome: this.formEdicao.value.nome,
      data: this.formEdicao.value.data,
      hora: this.formEdicao.value.hora,
      descricao: this.formEdicao.value.descricao,
      prioridade: this.formEdicao.value.prioridade,
    }
    // 
    this.tarefasService.atualizar(tarefa)

    this.mensagem = "Tarefa atualizada com sucesso!"
  }

  clear(): void{
    this.mensagem = "";
  }

}
