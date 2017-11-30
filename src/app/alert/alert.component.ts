import {Component, OnInit} from '@angular/core';
import {AlertService} from '../utils/Alert.Service';
@Component({
  moduleId: module.id,
  selector: 'alert',
  templateUrl: 'alert.component.html'
})

export class AlertComponent {
  message: any;

  constructor(private alertService: AlertService) {
  }


  /**
   * The alert page initials connecting to the server
   */

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => {
      this.message = message;
    });
  }
}

