import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  private estadoSelecionadoSource = new BehaviorSubject<string | null>(null); // Apenas o value do estado
  estadoSelecionado$ = this.estadoSelecionadoSource.asObservable();

  setEstadoSelecionado(estado: string): void {
    this.estadoSelecionadoSource.next(estado); // Define o valor
  }
}
