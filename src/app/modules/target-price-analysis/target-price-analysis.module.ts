import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetPricesAnalysisComponent } from './target-prices-analysis/target-prices-analysis.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: TargetPricesAnalysisComponent,
}]

@NgModule({
  declarations: [
    TargetPricesAnalysisComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TargetPriceAnalysisModule { }
