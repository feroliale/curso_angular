import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  public title: string = "Bem vindo";

  ngOnDestroy(): void {
    console.log("LOG | destroyed");
  }
}
