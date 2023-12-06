import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './title/title.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TitleComponent],
  template: `
  <app-title></app-title>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor(){}

  ngOnInit(): void{
    setTimeout(() => {
      console.log(1)
    }, 5000);
  }
}
