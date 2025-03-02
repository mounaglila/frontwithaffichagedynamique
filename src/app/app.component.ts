import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AffichageComponent } from './affichage/affichage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AffichageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
     title = 'user-test';

     getUser(){
      
     }
}
