import { Component, OnInit } from '@angular/core';
declare function makeNewBoard(number, number): any;


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  constructor() {};

  ngOnInit() {
    console.log(makeNewBoard(10,10));
  };

}
