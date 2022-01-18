import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CahomePageRoutingModule } from './cahome-routing.module';

import { CahomePage } from './cahome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CahomePageRoutingModule
  ],
  declarations: [CahomePage]
})
export class CahomePageModule {}
