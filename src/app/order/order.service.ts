import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Dish} from '../dishes-manage/dish.service';

@Injectable()
export class OrderService {

  /**
   * For share order information
   */
  private orderDetail: Map<string, number[]>;

  private orderDetailSubject = new Subject<Map<string, number[]>>();

  public setOrderDetailSubject(orderMap: Map<string, number[]>) {
    this.orderDetail = orderMap;
    this.orderDetailSubject.next(orderMap);
  }

  public getOrderDetailSubject(): Observable<Map<string, number[]>> {
    return this.orderDetailSubject.asObservable();
  }
}

export class Order {
  constructor(userId: string,
              restaurantId: string,
              order: Dish[],
              count: number[],
              address: string,
              done: boolean) {
  }
}
