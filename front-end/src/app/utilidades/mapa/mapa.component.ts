import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { icon, Icon, latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { Coordenada } from './coordenada';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  
  constructor() { }

  @Input()
  coordenadasIniciales:Coordenada[] = [];

  @Output()
  coordenadaSeleccionada:EventEmitter<Coordenada> = new EventEmitter<Coordenada>();

  ngOnInit(): void {

    this.capas=this.coordenadasIniciales.map(valor=>marker([valor.latitud, valor.longitud]));

  }

  

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      
    ],
    zoom: 14,
    center: latLng(7.110560780509331, -433.1132216887636)
    
  };

  capas:Marker<any>[] = [];

  manejarClick(event:LeafletMouseEvent) {

    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;
    console.log(latitud,longitud);
    const iconRetinaUrl = 'assets/marker-icon-2x.png';
    const iconUrl = 'assets/marker-icon.png';
    
        this.capas=[];
    
    this.capas.push(marker([latitud, longitud]));
    

    this.coordenadaSeleccionada.emit({latitud:latitud,longitud:longitud});

  }
}
