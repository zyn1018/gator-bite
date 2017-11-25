import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../domain/user.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../utils/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userId: string;
  public isLogin: boolean = false;
  public isRestaurant: boolean = false;
  @Output() toggle = new EventEmitter<void>();

  constructor(private userService: UserService, private cdr: ChangeDetectorRef, private router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    const user : string = localStorage.getItem('currentUser');
    const userInfo: Array<string> = user.split(',');
    console.log(userInfo);
    this.userId = this.userService.getUser().userId;
    this.isLogin = localStorage.getItem('currentUser') != null;
    this.userService.getIsLoginSubject().subscribe(data => {
      this.isLogin = data;
    });
    this.userService.getIsRestaurantSubject().subscribe(data => {
      this.isRestaurant = data;
    });
    this.cdr.markForCheck();
    this.cdr.detectChanges();
  }

  /**
   * Show sidebar
   */
  openSideBar() {
    this.toggle.emit();
  }

  /**
   * When user logs out, change header
   */
  logout() {
    this.authenticationService.logout();
    this.isLogin = false;
    this.isRestaurant = false;
    this.router.navigateByUrl('/home');
  }

  /**
   * Show user profile page
   */
  openUserProfile() {
    this.router.navigateByUrl('/user/' + this.userId);
  }
}
