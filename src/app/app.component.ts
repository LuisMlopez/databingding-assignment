import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databingding-assignment-start';
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onNumberGenerated(num: number): void {
    if (num % 2 === 0) {
      this.evenNumbers.push(num);
    } else {
      this.oddNumbers.push(num);
    }
  }
}
