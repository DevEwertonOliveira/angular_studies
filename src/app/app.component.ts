import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './title/title.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TitleComponent],
  template: `
  <app-title *ngIf="destruir"></app-title>
  <br>
  <button (click)="destruirComponent()">Destruir componente</button>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{

  public destruir:boolean = true;

  constructor(){}

  ngOnInit(): void {

  }

  public destruirComponent(){
    this.destruir = false;
  }
}
