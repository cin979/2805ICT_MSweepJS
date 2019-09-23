import { Component, OnInit } from '@angular/core';
import { boardCreation } from '../../assets/boardCreation';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  selectedDifficulty:string;
  difficulties = ['Easy', 'Normal', 'Hard'];

  constructor() { };

  ngOnInit() { };

  newGame() {
    var field = new boardCreation(10, 10);
    field.tiles.forEach((element) => {
        console.log(element.isBomb);
    });
  }
}
