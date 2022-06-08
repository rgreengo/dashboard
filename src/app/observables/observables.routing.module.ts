import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { OperatorsComponent } from './operators/operators.component';

const observablesRoutes: Routes = [
  { path: 'basic-obs', component: BasicComponent }, 
  { path: 'operators-obs', component: OperatorsComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(observablesRoutes)],
  exports: [RouterModule],
  declarations: [
  ]
})
export class ObservablesRoutingModule { }
