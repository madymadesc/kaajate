import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadetailPageRoutingModule } from './cadetail-routing.module';

import { CadetailPage } from './cadetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadetailPageRoutingModule
  ],
  declarations: [CadetailPage]
})
export class CadetailPageModule {}
