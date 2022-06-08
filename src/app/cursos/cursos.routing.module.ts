import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';


const cursosRoutes: Routes = [
  { path: 'cursos-detalhe/:id', component: CursosDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule],
  declarations: [
  ]
})
export class CursosRoutingModule { }
