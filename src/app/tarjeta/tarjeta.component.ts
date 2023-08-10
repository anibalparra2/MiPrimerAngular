import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent{

  public image:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJ9H6Rft6C1hlcJRFU96tl3sz9MXxYJKcQg&usqp=CAU";
  public Titulo:string="Curso Angular con interpolacion";
  constructor(){}

}
