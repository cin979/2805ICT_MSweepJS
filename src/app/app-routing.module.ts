import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { ScoresComponent } from './scores/scores.component';

const routes: Routes = [
  {path:'game', component:GameComponent, runGuardsAndResolvers:'always'},
  {path:'scores', component:ScoresComponent, runGuardsAndResolvers:'always'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
