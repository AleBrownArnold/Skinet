import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailedComponent } from './order-detailed/order-detailed.component';
import { OrderComponent } from './order.component';


const routes: Routes = [
  {path: '', component: OrderComponent},
  {path: ':id', component: OrderDetailedComponent, data: {breadcrumb: {alias: 'orderDetails'}}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
