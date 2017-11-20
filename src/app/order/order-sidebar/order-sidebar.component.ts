import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {OrderService} from '../order.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-order-sidebar',
  templateUrl: './order-sidebar.component.html',
  styleUrls: ['./order-sidebar.component.css']
})
export class OrderSidebarComponent implements OnInit {

  public orderDetail = new Map<string, number[]>();
  public show: boolean = false;
  public totalPrice: number = 0;
  public tax: number = 0;

  constructor(private orderService: OrderService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.orderService.getOrderDetailSubject().subscribe(data => {
      this.orderDetail = data;
      this.checkShowParam();
      this.calTotalPrice();
      this.calTax();
      this.cdr.markForCheck();
      this.cdr.detectChanges();
    });

  }

  /**
   * update show flag based on the number of items in orderDetail
   * size == 0 , don't show
   * size > 0, show
   */
  checkShowParam() {
    if (this.orderDetail.size == 0) {
      this.show = false;
    } else if (this.orderDetail.size > 0) {
      this.show = true;
    }
  }

  /**
   * Calculate the total price of order
   */
  calTotalPrice() {
    this.totalPrice = 0;
    this.orderDetail.forEach((value, key) => {
      this.totalPrice += value[0] * value[1];
    });
  }

  /**
   * Calculate the tax based on total price
   */
  calTax() {
    this.tax = this.totalPrice * 0.06;
  }

  /**
   * Remove dish from order
   * @param {string} dishName
   */
  removeDish(dishName: string) {
    if (confirm('Remove ' + dishName + ' from your bag?')) {
      this.orderDetail.delete(dishName);
    }
    this.checkShowParam();
    this.calTotalPrice();
    this.calTax();
  }

  /**
   * In sidebar, increase the number of one dishes
   * @param {string} dishName
   */
  addDishCount(dishName: string) {
    let value = this.orderDetail.get(dishName);
    this.orderDetail.set(dishName, [value[0] + 1, value[1]]);
    this.checkShowParam();
    this.calTotalPrice();
    this.calTax();
  }

  /**
   * In sidebar, increase the number of one dishes
   * @param {string} dishName
   */
  minusDishCount(dishName: string) {
    let value = this.orderDetail.get(dishName);
    if (value[0] == 1) {
      this.orderDetail.delete(dishName);
    } else {
      this.orderDetail.set(dishName, [value[0] - 1, value[1]]);
    }
    this.checkShowParam();
    this.calTotalPrice();
    this.calTax();
  }
}
