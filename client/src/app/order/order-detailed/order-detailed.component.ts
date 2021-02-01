import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/shared/models/order';
import { BreadcrumbService } from 'xng-breadcrumb';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrls: ['./order-detailed.component.scss']
})
export class OrderDetailedComponent implements OnInit {
  order: IOrder;

  constructor(private orderService: OrderService,
              private activatedRoute: ActivatedRoute,
              private bcService: BreadcrumbService) {
                this.bcService.set('@orderDetails', ' ');
              }

  ngOnInit(): void {
    this.loadOrder();
  }

  loadOrder() {
    const orderId = this.activatedRoute.snapshot.paramMap.get('id');

    this.orderService.getOrder(+orderId).subscribe(order => {
      this.order = order;
      console.log(order);
      this.bcService.set('@orderDetails', 'Order# ' + order.id + ' - ' + order.status);
    }, error => {
      console.log(error);
    });
  }

}
