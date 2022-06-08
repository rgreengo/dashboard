import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PostsRoutingModule } from './posts.routing.module';
import { PostsComponent } from './posts.component';
import { PostDetalheComponent } from './post-detalhe/post-detalhe.component';
import { PostCreateComponent } from './post-create/post-create.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostDetalheComponent,
    PostCreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PostsRoutingModule
  ]
})
export class PostModule { }
