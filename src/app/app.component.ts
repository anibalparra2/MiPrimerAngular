import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  image:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'MiPrimerApp';
  public ArregloTarjetas: Tarjeta[]=[];

  ngOnInit(): void {
    this.ArregloTarjetas = [
      {titulo:'Video 1', subtitulo: 'Subtitulo Video 1', image:"https://www.sexadodeaves.com/vlog/wp-content/uploads/2019/06/chipe-azul-@urugwild.jpg"},
      {titulo:'Video 2', subtitulo: 'Subtitulo Video 2', image:"https://www.sexadodeaves.com/vlog/wp-content/uploads/2019/06/platanero.jpg"},
      {titulo:'Video 3', subtitulo: 'Subtitulo Video 3', image:"https://www.sexadodeaves.com/vlog/wp-content/uploads/2019/06/jilguero-americano.jpg"},
    ]
  }



}
