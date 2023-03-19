import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web/build/player/lottie_light';

export function playerFactory() {
  return player;
}

const routes: Routes = [
  {
    path: '',
    component: NotFoundComponent,
    data: {
      meta: {
        title: 'Not Found',
      },
    },
  },
];

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LottieModule.forRoot({ player: playerFactory }),
  ],
})
export class NotFoundModule {}
