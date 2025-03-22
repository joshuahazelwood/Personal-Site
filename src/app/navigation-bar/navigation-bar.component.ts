import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {

  constructor(
    private router: Router,
  ) {
  }

  navigate(destination: string) {
    switch(destination) {
      case 'about':
        this.router.navigate(['/about']);
        break;
      case 'home':
        this.router.navigate(['/home']);
        break;
    }
  }
}
