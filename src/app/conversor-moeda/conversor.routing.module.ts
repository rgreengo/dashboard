import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversorComponent } from './conversor/conversor.component';

const conversorRoutes: Routes = [
  { path: 'conversor', component: ConversorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(conversorRoutes)],
  exports: [RouterModule],
  declarations: [
  ]
})

export class ConversorRoutingModule { }
