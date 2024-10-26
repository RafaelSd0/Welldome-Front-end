import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { GeolocalizacaoService } from '../../services/geolocalizacao.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  map!: Map;
  constructor(private geolocalizacao: GeolocalizacaoService) {}

  ngOnInit(): void {
    this.geolocalizacao.obterLocalizacao().then((cords) => {
      this.inicializarMapa(cords.latitude, cords.longitude);
    }).catch((error) => {
      console.error('Erro ao obter localização:', error);
      // Defina coordenadas padrão caso a localização falhe
      this.inicializarMapa(-23.533773, -46.62529); // São Paulo, por exemplo
    });

  }


  inicializarMapa(latitude: number, longitude: number): void {
    // Converte latitude e longitude para a projeção do OpenLayers
    const coordenadas = fromLonLat([longitude, latitude]);

    this.map = new Map({
      target: 'map', // Elemento onde o mapa será renderizado
      layers: [
        new TileLayer({
          source: new OSM() // Usando OpenStreetMap como camada de fundo
        })
      ],
      view: new View({
        center: coordenadas, // Coordenadas convertidas para projeção correta
        zoom: 12 // Nível de zoom inicial
      })
    });
  }
}
