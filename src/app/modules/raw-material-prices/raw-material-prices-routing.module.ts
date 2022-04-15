import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastingReportComponent } from './raw-material-prices-section/forecasting-report/forecasting-report.component';
import { GlobalImportExportDataComponent } from './raw-material-prices-section/global-import-export-data/global-import-export-data.component';
import { LmeCommodityDailyPriceUpdatesComponent } from './raw-material-prices-section/lme-commodity-daily-price-updates/lme-commodity-daily-price-updates.component';
import { MonthlyCirReportComponent } from './raw-material-prices-section/monthly-cir-report/monthly-cir-report.component';
import { QuarterlyNewsletterComponent } from './raw-material-prices-section/quarterly-newsletter/quarterly-newsletter.component';
import { RawMaterialPricesSectionComponent } from './raw-material-prices-section/raw-material-prices-section.component';
import { RfqBenchMarkingComponent } from './raw-material-prices-section/rfq-bench-marking/rfq-bench-marking.component';
import { WeeklyHighlightsComponent } from './raw-material-prices-section/weekly-highlights/weekly-highlights.component';
import { RawMaterialPricesComponent } from './raw-material-prices/raw-material-prices.component';


const routes: Routes = [
  {path: '',component: RawMaterialPricesComponent},
  {path: 'rawMaterialPricesSection',component: RawMaterialPricesSectionComponent,
children:[
  {path:'',redirectTo:'dailyPrice',pathMatch:'full'},
  {path:'dailyPrice',component:LmeCommodityDailyPriceUpdatesComponent},
  {path:'cirReport',component:MonthlyCirReportComponent},
  {path:'weeklyHighlights',component:WeeklyHighlightsComponent},
  {path:'newLetter',component:QuarterlyNewsletterComponent},
  {path:'foreCastingReport',component:ForecastingReportComponent},
  {path:'rFQBenchMarking',component:RfqBenchMarkingComponent},
  {path:'globalImportExportData',component:GlobalImportExportDataComponent},
  {
    path:'rawMaterialPrices',loadChildren:()=> import('./raw-material-prices.module')
    .then(mod => mod.RawMaterialPricesModule)
  }
]
},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RawMaterialPricesRoutingModule { }
