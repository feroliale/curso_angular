import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {

  @Output() public enviarDados = new EventEmitter();

  public list: Array<{ nome: string, idade: number }> = [
    { nome: "João", idade: 20 },
    { nome: "José", idade: 30 },
    { nome: "Maria", idade: 40 },
  ];

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }
}
