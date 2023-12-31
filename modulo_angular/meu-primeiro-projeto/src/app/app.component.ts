import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais>
    
    <app-data-binding></app-data-binding> -->
    
    <!-- <app-diretivas-aributos>
    
    <h1>Aulas de Diretivas - Atributos</h1>
    
      <h3>Final da Aula</h3>
    
    </app-diretivas-aributos>
    
    <app-diretivas-aributos>
    
    <h1>Cópia de diretiva</h1>
    
      <h3>Final da cópia</h3>
    
    </app-diretivas-aributos> -->

    <!-- <app-new-component></app-new-component> -->
    
    <!-- <app-input [contador]="addValue"></app-input>
    
    <br>
    
    <button (click)="add()">Add</button> -->
    
    <ng-template [ngIf]="getDados">
      <h1>{{getDados.nome}}</h1>
      <h2>{{getDados.idade}}</h2>
      <hr>
    </ng-template>

    <app-output (enviarDados)="setDados($event)"></app-output>

    <router-outlet></router-outlet>
  `
})

export class AppComponent {

  public destruir: boolean = true;
  public addValue: number = 0;

  public getDados: { nome: string, idade: number } | undefined;

  public add() {
    this.addValue += 1;
  }

  public destruirComponent() {
    this.destruir = false;
  }

  public setDados(event: { nome: string, idade: number }) {
    this.getDados = event;
  }
}
