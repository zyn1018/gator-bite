import {Component, OnInit, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-order-manage',
  templateUrl: './order-manage.component.html',
  styleUrls: ['./order-manage.component.css']
})
export class OrderManageComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();
  constructor() {
  }

  ngOnInit() {
  }

  openSidebar() {
    this.toggle.emit();
  }
}
