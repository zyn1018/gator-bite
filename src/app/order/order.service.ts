import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OrderService {

  /**
   * For share order information
   */
  private orderDetail: Map<string, number[]>;
  private restaurantId: string;

  private orderDetailSubject = new Subject<Map<string, number[]>>();
  private restaurantIdSubject = new Subject<string>();

  public setOrderDetailSubject(orderMap: Map<string, number[]>) {
    this.orderDetail = orderMap;
    this.orderDetailSubject.next(orderMap);
  }

  public getOrderDetailSubject(): Observable<Map<string, number[]>> {
    return this.orderDetailSubject.asObservable();
  }

  public setRestaurantIdSubject(restaurantId: string) {
    this.restaurantId = restaurantId;
    this.restaurantIdSubject.next(restaurantId);
  }

  public getRestaurantIdSubject(): Observable<string> {
    return this.restaurantIdSubject.asObservable();
  }
}


export class OrderDetail {
  constructor(public dishName: string,
              public dishCount: number) {
  }
}

export class Order {
  constructor(public username: string,
              public restaurantId: string,
              public restaurantName: string,
              public order: OrderDetail[],
              public address: string,
              public price: number) {
  }
}
