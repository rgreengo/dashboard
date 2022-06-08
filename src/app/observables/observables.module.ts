import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BasicComponent } from './basic/basic.component';
import { ObservablesRoutingModule } from './observables.routing.module';
import { OperatorsComponent } from './operators/operators.component';


@NgModule({
  declarations: [
    BasicComponent,
    OperatorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ObservablesRoutingModule,
  ]
})
export class ObservablesModule { }
