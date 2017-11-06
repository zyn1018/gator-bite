import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../domain/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLogin: boolean = false;
  @Output() toggle = new EventEmitter<void>();

  constructor(private userService: UserService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.userService.getisLoginSubject().subscribe(data => {
      this.isLogin = data;
      console.log(data);
    });
    this.cdr.markForCheck();
    this.cdr.detectChanges();
  }

  public isLoginResultHandler(isLogin: boolean) {
    this.isLogin = isLogin;
  }

  openSideBar() {
    this.toggle.emit();
  }
}
