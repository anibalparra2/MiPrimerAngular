import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent{

  @Input() dataEntrante:any; //recibe los datos de app.component.ts
  
  constructor(){}

}
