import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Counter';
  count: number = 0;
  now;

  constructor() {
    setInterval(() => {
      this.now = Date.now();
    }, 1);
}

  handleIncrease = () => {
    this.count++;
  }

  handleDecrease = () => {
    if (this.count !== 0)
      this.count--;
  }

  handleReset = () => {
    this.count = 0;
  }
}
