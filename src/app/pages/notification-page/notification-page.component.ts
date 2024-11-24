import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FormComponent } from "../../components/form/form.component";
import { APIwelldomeService } from '../../services/apiwelldome.service';

@Component({
  selector: 'app-notification-page',
  standalone: true,
  imports: [TableModule, CommonModule, FormComponent],
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.css']
})
export class NotificationPageComponent implements OnInit  {
  estados: any[] = [];
  totalRecords: number = 0;
  loading: boolean = false;

  constructor(private apiService: APIwelldomeService) {}

  ngOnInit() {
    // Carregar os registros totais na inicialização
    this.apiService.getEstados().subscribe((data) => {
      this.totalRecords = data.length; // Define o número total de registros
    });
  }

  loadData(event: any) {
    this.loading = true;

    // Determinar o índice inicial e final
    const start = event.first; // Índice inicial
    const end = start + event.rows; // Índice final

    // Simulação: Filtro de dados no back-end (ajuste para chamar uma API com paginação, se disponível)
    this.apiService.getEstados().subscribe((data) => {
      this.estados = data.slice(start, end);
      this.loading = false;
    });
  }
}
