import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionHealthComponent } from './sections/section-health/section-health.component';
import { SectionSalesComponent } from './sections/section-sales/section-sales.component';
import { SectionOrdersComponent } from './sections/section-orders/section-orders.component';

const routes: Routes = [
  {
    path: 'sales',
    component: SectionSalesComponent
  },
  {
    path: 'health',
    component: SectionHealthComponent
  },
  {
    path: 'orders',
    component: SectionOrdersComponent
  },
  { path: '', redirectTo: 'sales', pathMatch: 'full' },
  { path: '**', redirectTo: 'sales' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
