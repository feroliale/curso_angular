import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent {

  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{ nome: string, idade: number }> = [
    { nome: "André", idade: 10 },
    { nome: "Bruno", idade: 20 },
    { nome: "Carlos", idade: 30 },
    { nome: "Daniel", idade: 40 },
  ];

  public nomeLista: string = 'Edgar';
  public idadeLista: number = 50;

  public nome: string = 'joão';

  ngOnInit(): void {

    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000);
  }

  public onClick() {
    if (this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAddList(nome: string, idade: number) {
    this.list.push({ nome: nome, idade: idade });
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1);
  }
}
