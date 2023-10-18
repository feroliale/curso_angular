import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  {{ valor }}
  <button (click)="adicionar()">Adicionar</button>
  <app-title *ngIf="destruir"></app-title>
  <br/>
  <button (click)="destruirComponent()">Detruir Componente</button>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {

  public valor: number = 1;

  public destruir: boolean = true;

  public adicionar(): number {
    return this.valor += 1;
  }

  public destruirComponent() {
    this.destruir = false;
  }

  ngOnInit(): void { }

  ngDoCheck(): void {
    console.log("LOG | ngDoCheck");
  }
  ngAfterContentInit(): void {
    console.log("LOG | ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("LOG | ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("LOG | ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("LOG | ngAfterViewChecked");
  }

}
