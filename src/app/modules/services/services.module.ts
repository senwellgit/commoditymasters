import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourcingServicesComponent } from './sourcing-services/sourcing-services.component';
import { PurchaseInterlligenceComponent } from './purchase-interlligence/purchase-interlligence.component';
import { PurchasePriceVarianceComponent } from './purchase-price-variance/purchase-price-variance.component';



@NgModule({
  declarations: [
    SourcingServicesComponent,
    PurchaseInterlligenceComponent,
    PurchasePriceVarianceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }
