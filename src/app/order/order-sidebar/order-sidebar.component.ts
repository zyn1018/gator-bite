import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {Order, OrderDetail, OrderService} from '../order.service';
import {Headers, Http, RequestOptions} from '@angular/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DOCUMENT} from '@angular/common';
import {DishService} from '../../dishes-manage/dish.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-order-sidebar',
  templateUrl: './order-sidebar.component.html',
  styleUrls: ['./order-sidebar.component.css']
})
export class OrderSidebarComponent implements OnInit {

  orderForm: FormGroup;
  fb: FormBuilder = new FormBuilder();
  public orderDetail = new Map<string, number[]>();
  public show: boolean = false;
  public totalPrice: number = 0;
  public tax: number = 0;
  public restaurantId: string;
  public userId: string;
  public submitDetail: Array<OrderDetail>;
  public address: string;
  public order: Order;
  public headers: Headers;
  public options: RequestOptions;
  public username: string;
  public restaurantName: string;

  constructor(private orderService: OrderService, @Inject(DOCUMENT) private document: Document, private cdr: ChangeDetectorRef, private http: Http, private dishService: DishService) {
  }

  ngOnInit() {
    this.orderForm = this.fb.group({
      email: [''],
      username: ['',],
      loginRole: ['']
    });
    this.submitDetail = [];


    this.orderService.getOrderDetailSubject().subscribe(data => {
      this.orderDetail = data;
      this.checkShowParam();
      this.calTotalPrice();
      this.calTax();
      this.cdr.markForCheck();
      this.cdr.detectChanges();
    });

    this.orderService.getRestaurantIdSubject().subscribe(data => {
      this.restaurantId = data;
    });

    if (localStorage.getItem('currentUser') != null) {
      this.userId = JSON.parse(localStorage.getItem('currentUser'))._id;
      this.address = JSON.parse(localStorage.getItem('currentUser')).address;
      this.username = JSON.parse(localStorage.getItem('currentUser')).username;
      this.cdr.markForCheck();
      this.cdr.detectChanges();
    }
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

  /**
   * When press submit your order button, the order will be sent to server
   */
  submitOrder() {
    //Set token into header
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('authentication', localStorage.getItem('token'));
    this.options = new RequestOptions({headers: this.headers});
    this.orderDetail.forEach((value: number[], key: string) => {
      this.submitDetail.push(new OrderDetail(key, value[0]));
    });
    const price = this.totalPrice;
    const od = this.submitDetail;
    this.dishService.getOneResDish(this.restaurantId).subscribe(
      data => {
        this.restaurantName = data['username'];
        this.order = new Order(this.username, this.restaurantId, this.restaurantName, od, this.address, price);
        this.http.post('/api/submitOrder', this.order, this.options).subscribe(data => {
          alert('Order has been submitted!');
        });
      }
    );

    this.orderDetail.clear();
    this.submitDetail = [];
    this.orderService.setOrderDetailSubject(new Map<string, number[]>());
    this.checkShowParam();
    this.cdr.markForCheck();
    this.cdr.detectChanges();
  }
}
