import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpendAnalysisComponent } from './spend-analysis/spend-analysis.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: SpendAnalysisComponent,
}]

@NgModule({
  declarations: [
    SpendAnalysisComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SpendAnalysisModule { }
