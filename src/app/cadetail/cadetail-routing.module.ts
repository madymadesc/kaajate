import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadetailPage } from './cadetail.page';

const routes: Routes = [
  {
    path: '',
    component: CadetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadetailPageRoutingModule {}
