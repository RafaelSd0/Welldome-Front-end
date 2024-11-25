import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { EstadoService } from '../../services/estado.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, DropdownModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  estadosDisponiveis: { name: string, value: string }[] = [];
  estadoSelecionado: any;

  constructor (private estadoService: EstadoService){}

  onEstadoChange(event: any): void {
    this.estadoService.setEstadoSelecionado(this.estadoSelecionado.value); // Passa ao serviço
  }

  ngOnInit(): void {
    this.estadosDisponiveis = [
      { name: 'AC', value: 'AC' },
      { name: 'AL', value: 'AL' },
      { name: 'AM', value: 'AM' },
      { name: 'AP', value: 'AP' },
      { name: 'BA', value: 'BA' },
      { name: 'CE', value: 'CE' },
      { name: 'DF', value: 'DF' },
      { name: 'ES', value: 'ES' },
      { name: 'GO', value: 'GO' },
      { name: 'MA', value: 'MA' },
      { name: 'MG', value: 'MG' },
      { name: 'MS', value: 'MS' },
      { name: 'MT', value: 'MT' },
      { name: 'PA', value: 'PA' },
      { name: 'PB', value: 'PB' },
      { name: 'PE', value: 'PE' },
      { name: 'PI', value: 'PI' },
      { name: 'PR', value: 'PR' },
      { name: 'RJ', value: 'RJ' },
      { name: 'RN', value: 'RN' },
      { name: 'RO', value: 'RO' },
      { name: 'RR', value: 'RR' },
      { name: 'RS', value: 'RS' },
      { name: 'SC', value: 'SC' },
      { name: 'SE', value: 'SE' },
      { name: 'SP', value: 'SP' },
      { name: 'TO', value: 'TO' }
    ];
  }

}
