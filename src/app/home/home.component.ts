import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  sliderValue = 20; // Default position in px
  randomBinaryString: string = '';

  generateRandomBinaryString(length: number): string {
    return Array.from({ length }, () => Math.random() < 0.5 ? '0' : '1').join('');
  }

  ngOnInit() {
    this.randomBinaryString = this.generateRandomBinaryString(10000);
  }
}
