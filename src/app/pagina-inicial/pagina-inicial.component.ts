import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts'


@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  grafico: Chart = new Chart();

  constructor() { }

  ngOnInit() {

    var dados: any[] = [
      {name: 'Prioridade baixa', y: 6, color: '#5CB85C'},
      {name: 'Prioridade media', y: 4, color: '#F0AD4E'},
      {name: 'Prioridade alta', y: 8, color: '#e81919'}
    ];

    var nomes: any[]=[
      ['PRIORIDADE BAIXA'], ['PRIORIDADE MEDIA'], ['PRIORIDADE ALTA' ]
    ]

    this.grafico = new Chart({
      chart:{ type: 'column'},
      title:{ text: 'Quantidade de tarefas por prioridade' },
      xAxis:{categories: nomes},
      yAxis:{title: { text: 'Quantidade de tarefas por prioridade'}},
      legend : { enabled : false },
      credits : { enabled: false },
      series: [ { data: dados, type: undefined as any } ]
    });

  }

}
