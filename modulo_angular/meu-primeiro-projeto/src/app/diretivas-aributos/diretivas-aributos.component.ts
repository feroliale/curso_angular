import { Component } from '@angular/core';

@Component({
    selector: 'app-diretivas-aributos',
    templateUrl: './diretivas-aributos.component.html',
    styleUrls: ['./diretivas-aributos.component.css']
})
export class DiretivasAributosComponent {

    public valor: boolean = true;
    public size: string = "20px";
    public backgroundColor: string = "blue";

    public nome: string = "";
    public list: Array<{ nome: string }> = [];

    ngOnInit() {
        setInterval(() => {
            if (this.valor) {
                this.valor = false;
            } else {
                this.valor = true;
            }

            if (this.size == "20px") {
                this.size = "50px";
                this.backgroundColor = "black";
            } else {
                this.size = "20px";
                this.backgroundColor = "blue";
            }
        }, 2000);
    };

    public salvar() {
        this.list.push({ nome: this.nome });
        this.nome = "";
    }

    public inverter() {
        let word = this.nome.toLocaleLowerCase();
        let result = "";

        for (let index = word.length - 1; index >= 0; index--) {
            result += word[index];
        }

        this.list.push({ nome: result });
        this.nome = "";
    }
}
