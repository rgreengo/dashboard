import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CursosModule } from './cursos/cursos.module';
import { FiltroComPipeComponent } from './filtro-com-pipe/filtro-com-pipe.component';
import { FilterPipe } from './filter.pipe';
import { CursosService } from './cursos/cursos.service';
import { Erro404Component } from './pages/erro404/erro404.component';
import { PostModule } from './posts/post.module';
import { PostsService } from './posts/posts.service';
import { FormulariosModule } from './formularios/formularios.module';
import { ObservablesModule } from './observables/observables.module';
import { ConversorModule } from './conversor-moeda/conversor.module';


@NgModule({
  declarations: [
    HomeComponent,
    FiltroComPipeComponent,
    Erro404Component,
    FilterPipe,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ConversorModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    FormulariosModule,
    CursosModule,
    PostModule,
    ObservablesModule,
    AppRoutingModule,
  ],
  providers: [
    CursosService,
    PostsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
