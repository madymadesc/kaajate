import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CahomePage } from './cahome.page';

const routes: Routes = [
  {
    path: '',
    component: CahomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CahomePageRoutingModule {}
