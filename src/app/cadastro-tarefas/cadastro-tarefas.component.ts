import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tarefa } from '../models/tarefa.model';
import { TarefasService } from '../services/tarefas.service';

@Component({
  selector: 'app-cadastro-tarefas',
  templateUrl: './cadastro-tarefas.component.html',
  styleUrls: ['./cadastro-tarefas.component.css']
})

export class CadastroTarefasComponent implements OnInit {

  mensagem: string = "";

  constructor(
    private tarefasService: TarefasService) 
  { }

  ngOnInit(): void {
  }

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(6)]),
    data: new FormControl('', [Validators.required]),
    hora: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required, Validators.minLength(10)]),
    prioridade: new FormControl('', [Validators.required])
  });

  get form(): any{
    return this.formCadastro.controls;
  }

  onSubmit() : void {

    const tarefa: Tarefa = {
      idTarefa: this.tarefasService.gerarId(),
      nome: this.formCadastro.value.nome,
      data: this.formCadastro.value.data,
      hora: this.formCadastro.value.hora,
      descricao: this.formCadastro.value.descricao,
      prioridade: this.formCadastro.value.prioridade
    };

    this.tarefasService.cadastrar(tarefa);

    // console.log(this.formCadastro.value);
    this.mensagem = "Tarefa cadastrada com sucesso.";
    this.formCadastro.reset();
  }

  clear(): void{
    this.mensagem = "";
  }

}
