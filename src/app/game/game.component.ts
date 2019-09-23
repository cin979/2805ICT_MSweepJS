import { Component, OnInit } from '@angular/core';
import { boardCreation } from '../../assets/js/boardCreation.js';

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
    var field = boardCreation(10,10);
    field.forEach((element: { isBomb: any; }) => {
        console.log(element.isBomb);
    });
  }
}
