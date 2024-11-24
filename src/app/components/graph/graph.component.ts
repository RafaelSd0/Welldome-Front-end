import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { APIwelldomeService } from '../../services/apiwelldome.service';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent implements OnInit {

  constructor(private api: APIwelldomeService){}



  data: any;

  options: any;

  // toda as notificaçoes
  estados: any[] = [];
  // todos as notificaçoes de um estado
  estadosFiltrados: any[] = []
  // casos e mortes do estado filtrado
  casos: number[] = []
  mortes: number[] = []
  // opcao escolhida da barra de pesquisa
  estadoSelecionado: string = 'SP' // São paulo por padrão

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    // Configurações iniciais do gráfico
    this.data = {
      labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [
        {
          label: 'Casos',
          data: this.casos, // Inicialmente vazio
          fill: false,
          borderColor: documentStyle.getPropertyValue('--red-600'),
          tension: 0.4,
        },
        {
          label: 'Mortes',
          data: this.mortes, // Inicialmente vazio
          fill: false,
          borderColor: documentStyle.getPropertyValue('--yellow-600'),
          tension: 0.4,
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    // Carregar os estados e atualizar o gráfico dinamicamente
    this.carregarEstados();
  }

  carregarEstados(): void {
    this.api.getEstados().subscribe(
      (dados) => {
        this.estados = dados;
        console.log('Estados carregados:', this.estados);

        this.filtrarPorEstado();
        this.atualizarGrafico();
        this.filtrarMortesDoEstado();
        this.filtrarCasosDoEstado();
      },
      (erro) => {
        console.error('Erro ao carregar os estados:', erro);
      }
    );
  }


  atualizarGrafico(): void {
    this.data.datasets[0].data = this.estadosFiltrados.map((estado) => estado.casos);
    this.data.datasets[1].data = this.estadosFiltrados.map((estado) => estado.mortes);
    console.log('Dados atualizados no gráfico:', this.data);
  }

  filtrarPorEstado(): void {
    this.estadosFiltrados = this.estados.filter(
      (estado) => estado.uf === this.estadoSelecionado
    );
    console.log('Estados filtrados:', this.estadosFiltrados);
  }

  filtrarCasosDoEstado(): void {
    this.casos = this.estadosFiltrados.map(estado => estado.casos);
    console.log('Casos:', this.casos);
  }

  filtrarMortesDoEstado(): void {
    this.mortes = this.estadosFiltrados.map(estado => estado.mortes);
    console.log('Mortes:', this.mortes);
  }

}
