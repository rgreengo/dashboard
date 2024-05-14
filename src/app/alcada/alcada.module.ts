import { AlcadaService } from './services/alcada.service';
import { CollapseModule } from 'ngx-bootstrap/collapse';
//import { NgxMaskModule } from 'ngx-mask';
import { RouterModule } from '@angular/router';
//import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlcadaComponent } from './pages/lista-alcada/lista-alcada.component';
//import { LaddaModule } from 'angular2-ladda';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [ListaAlcadaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //DataTablesModule,
    RouterModule,
    CollapseModule,
    //NgxMaskModule.forRoot(),
    // LaddaModule,
    // PanelsModule,
    TabsModule
  ],
  providers: [AlcadaService],
})
export class AlcadaModule {}
