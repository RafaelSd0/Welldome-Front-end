import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { APIwelldomeService } from '../../services/apiwelldome.service';
import { EstadoService } from '../../services/estado.service';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  data: any;
  options: any;

  estados: any[] = []; // Todas as notificações
  estadosFiltrados: any[] = []; // Notificações de um estado específico
  casos: number[] = []; // Casos filtrados
  mortes: number[] = []; // Mortes filtradas
  estado!: string | null; // Estado selecionado

  constructor(
    private api: APIwelldomeService,
    private estadoService: EstadoService
  ) {}

  ngOnInit(): void {
    this.inicializarGrafico();

    // Atualiza o gráfico ao mudar o estado selecionado
    this.estadoService.estadoSelecionado$.subscribe((estado) => {
      this.estado = estado;
      this.carregarEstados(); // Filtra e atualiza os dados dinamicamente
    });
  }

  inicializarGrafico(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [
        {
          label: 'Casos',
          data: [], // Inicialmente vazio
          fill: false,
          borderColor: documentStyle.getPropertyValue('--red-600'),
          tension: 0.4,
        },
        {
          label: 'Mortes',
          data: [], // Inicialmente vazio
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
  }

  carregarEstados(): void {
    this.api.getEstados().subscribe(
      (dados) => {
        this.estados = dados;
        this.atualizarFiltragemEGráfico(); // Atualiza após carregar os dados
      },
      (erro) => {
        console.error('Erro ao carregar os estados:', erro);
      }
    );
  }

  atualizarFiltragemEGráfico(): void {
    // Filtra os dados pelo estado selecionado
    this.estadosFiltrados = this.estados.filter(
      (estado) => estado.uf === this.estado
    );

    this.casos = this.estadosFiltrados.map((estado) => estado.casos);
    this.mortes = this.estadosFiltrados.map((estado) => estado.mortes);

    // Recria o objeto "data" para forçar a atualização do gráfico
    this.data = {
      ...this.data,
      datasets: [
        {
          ...this.data.datasets[0], // Mantém as configurações do dataset de casos
          data: this.casos,
        },
        {
          ...this.data.datasets[1], // Mantém as configurações do dataset de mortes
          data: this.mortes,
        },
      ],
    };

    console.log('Gráfico atualizado:', this.data);
  }

}
