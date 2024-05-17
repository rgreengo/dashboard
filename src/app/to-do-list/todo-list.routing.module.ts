import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

const todoRoutes: Routes = [
  { path: 'todo-list', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(todoRoutes)],
  exports: [RouterModule],
  declarations: [
  ]
})
export class TodoListRoutingModule { }
