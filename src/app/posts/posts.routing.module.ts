import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostCreateComponent } from './post-create/post-create.component';
import { PostDetalheComponent } from './post-detalhe/post-detalhe.component';
import { PostsComponent } from './posts.component';

const postsRoutes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'post-detalhe/:id', component: PostDetalheComponent },
  { path: 'post-create', component: PostCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(postsRoutes)],
  exports: [RouterModule],
  declarations: [
  ]
})
export class PostsRoutingModule { }
