import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  map!: Map;

  ngOnInit(): void {
    this.inicializarMapa();
  }

  inicializarMapa(): void {
  this.map = new Map({
    target: 'map', // Elemento div onde o mapa será renderizado
    layers: [
      new TileLayer({
        source: new OSM() // Usando OpenStreetMap como camada de fundo
      })
    ],
    view: new View({
      center: fromLonLat([-46.62529, -23.533773]), // Coordenadas iniciais (São Paulo)
      zoom: 12 // Nível de zoom inicial
    })
  });
}

}
