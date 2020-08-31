import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() numberGenerated = new EventEmitter<number>();
  interval;
  num = 0;
  gameStatus = 'stopped';

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(): void {
    this.gameStatus = 'started';
    this.num = 0;

    this.interval = setInterval(() => {
      this.numberGenerated.emit(this.num);
      this.num++;
    }, 1000);
  }

  onStopGame(): void {
    this.gameStatus = 'stopped';

    clearInterval(this.interval);
  }

}
