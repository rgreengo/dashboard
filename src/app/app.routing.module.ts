import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltroComPipeComponent } from './filtro-com-pipe/filtro-com-pipe.component';
import { FormulariosRoutingModule } from './formularios/formularios.routing.module';
import { Erro404Component } from './pages/erro404/erro404.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsRoutingModule } from './posts/posts.routing.module';
import { ListaAlcadaComponent } from './alcada/pages/lista-alcada/lista-alcada.component';


const appRoutes: Routes = [
  { path: 'alcada', component: ListaAlcadaComponent },
  { path: 'filtros', component: FiltroComPipeComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: Erro404Component },
];

@NgModule({
  imports: [
    PostsRoutingModule,
    FormulariosRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
