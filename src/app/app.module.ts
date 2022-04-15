import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [AppComponent, AdminComponent, ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, FlexLayoutModule, BrowserAnimationsModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
