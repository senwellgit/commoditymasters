import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'

const routes: Routes = [{
  path: '',
  component: SubscribeComponent,
}]

@NgModule({
  declarations: [
    SubscribeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),ReactiveFormsModule,FormsModule
  ]
})
export class SubscribeModule { }
