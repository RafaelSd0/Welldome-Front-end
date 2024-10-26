import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocalizacaoService {
  latitude!: number;
  longitude!: number;

  obterLocalizacao(): Promise<{ latitude: number, longitude: number }> {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            // Resolve a Promise com as coordenadas
            resolve({
              latitude: this.latitude,
              longitude: this.longitude
            });
          },
          (error) => {
            console.error('Erro ao obter localização', error);
            // Rejeita a Promise se ocorrer um erro
            reject(error);
          }
        );
      } else {
        reject('Geolocalização não é suportada pelo navegador.');
      }
    });
  }
}

