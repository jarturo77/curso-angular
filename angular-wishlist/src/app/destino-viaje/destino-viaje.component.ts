import { DestinoViaje } from './../models/destino-viaje.model';
import { Component, OnInit, Input, HostBinding } from '@angular/core';             //importa cin input

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input() destino: DestinoViaje;
  @HostBinding('attr.class') cssClass= 'col-md-4';
 

  constructor() {
   }

  ngOnInit(): void {
  }

}
