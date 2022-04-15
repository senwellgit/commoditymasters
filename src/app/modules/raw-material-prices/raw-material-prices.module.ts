import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import { RawMaterialPricesRoutingModule } from './raw-material-prices-routing.module';
import { RawMaterialPricesComponent } from './raw-material-prices/raw-material-prices.component';
import { RawMaterialPricesSectionComponent } from './raw-material-prices-section/raw-material-prices-section.component';
import { LmeCommodityDailyPriceUpdatesComponent } from './raw-material-prices-section/lme-commodity-daily-price-updates/lme-commodity-daily-price-updates.component';
import { MonthlyCirReportComponent } from './raw-material-prices-section/monthly-cir-report/monthly-cir-report.component';
import { WeeklyHighlightsComponent } from './raw-material-prices-section/weekly-highlights/weekly-highlights.component';
import { QuarterlyNewsletterComponent } from './raw-material-prices-section/quarterly-newsletter/quarterly-newsletter.component';
import { ForecastingReportComponent } from './raw-material-prices-section/forecasting-report/forecasting-report.component';
import { RfqBenchMarkingComponent } from './raw-material-prices-section/rfq-bench-marking/rfq-bench-marking.component';
import { GlobalImportExportDataComponent } from './raw-material-prices-section/global-import-export-data/global-import-export-data.component'; 



@NgModule({
  declarations: [
    RawMaterialPricesComponent,
    RawMaterialPricesSectionComponent,
    LmeCommodityDailyPriceUpdatesComponent,
    MonthlyCirReportComponent,
    WeeklyHighlightsComponent,
    QuarterlyNewsletterComponent,
    ForecastingReportComponent,
    RfqBenchMarkingComponent,
    GlobalImportExportDataComponent
  ],
  imports: [
    CommonModule,RawMaterialPricesRoutingModule,MatTableModule,
 
    
  ]
})
export class RawMaterialPricesModule { }
