import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais>
    <app-data-binding></app-data-binding> -->
    <router-outlet></router-outlet>
    <app-diretivas-aributos></app-diretivas-aributos>
  `
})
export class AppComponent {

}
