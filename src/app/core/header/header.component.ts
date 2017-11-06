import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../domain/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userId: number;
  public isLogin: boolean = false;
  public isRestaurant: boolean = false;
  @Output() toggle = new EventEmitter<void>();

  constructor(private userService: UserService, private cdr: ChangeDetectorRef, private router: Router) {
  }

  ngOnInit() {
    this.userId = this.userService.getUser().userId;
    this.userService.getIsLoginSubject().subscribe(data => {
      this.isLogin = data;
    });
    this.userService.getIsRestaurantSubject().subscribe(data => {
      this.isRestaurant = data;
    })
    this.cdr.markForCheck();
    this.cdr.detectChanges();
  }

  openSideBar() {
    this.toggle.emit();
  }

  logout() {
    this.isLogin = false;
    this.isRestaurant = false;
    this.router.navigateByUrl('/home');
  }

  openUserProfile() {
    this.router.navigateByUrl('/user/' + this.userId);
  }
}
