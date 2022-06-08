import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos.routing.module';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';


@NgModule({
  declarations: [
    CursosDetalheComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
  ],
})
export class CursosModule { }
