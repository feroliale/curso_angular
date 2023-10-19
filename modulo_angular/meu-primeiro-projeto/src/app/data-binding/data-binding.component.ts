import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  public nome: string = "Alexandre";
  public idade: number = 31;

  public now = new Date();
  public year = this.now.getFullYear();

}
