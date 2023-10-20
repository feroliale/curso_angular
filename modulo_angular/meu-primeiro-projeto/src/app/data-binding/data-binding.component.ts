import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  public nome: string = "Alexandre";
  public idade: number = 31;

  public now: Date = new Date();
  public year: number = this.now.getFullYear();

  public checkDisabled: boolean = false;

  public imgSrc: string = "https://img.freepik.com/fotos-gratis/foto-gratuita-fundo-de-sexta-feira-com-jesus-cristo-e-cruz_1340-28462.jpg?w=360&t=st=1697819912~exp=1697820512~hmac=d7b8d5873c28bfe2ec70b389e35360fa90a2f581e662c44d86ec25d9dd5d7eb9";
  public imgTitle: string = "Imagem de Jesus";

  public position: { x: number, y: number } = { x: 0, y: 0 };

  public alertaInfo(value: MouseEvent) {
    console.log(value);
  }

  public mouseMoveTest(value: MouseEvent) {
    // console.log(value);
    this.position.x = value.offsetX;
    this.position.y = value.offsetY;
  }
}
