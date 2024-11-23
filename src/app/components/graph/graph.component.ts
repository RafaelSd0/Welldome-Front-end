import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent implements OnInit {

  data: any;

    options: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        //para requisitar os dados do grafico
        // pegar estado
        // cidade
        // retornar um objeto com os dados nescessarios para o funcionamento do grafico


        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // datas dos casos da api
            datasets: [
                {
                    label: 'Coringa Virus', // nome da doença
                    data: [65, 59, 10, 91, 76, 55, 50], // casos por data
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--red-600'), // cor do grafico
                    tension: 0.4
                },
            ]
        };

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }

}
