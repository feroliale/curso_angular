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
    
    <router-outlet></router-outlet>
    <app-diretivas-aributos></app-diretivas-aributos>
  `
})
export class AppComponent {

}
