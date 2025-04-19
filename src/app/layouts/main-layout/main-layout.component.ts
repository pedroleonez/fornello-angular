import { Component } from '@angular/core';
import HeaderComponent from '../../shared/components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [HeaderComponent, RouterOutlet],
  template: `
    <app-header></app-header>
    <main class="">
      <router-outlet></router-outlet>
    </main>
  `,
})
export class MainLayoutComponent {}
