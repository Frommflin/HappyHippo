import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'hippo-site-navigation',
  templateUrl: './site-navigation.component.html',
  styleUrls: ['../../styles/css/site-navigation.component.css']
})
export class SiteNavigationComponent implements OnInit {
  user: string | null = null;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUser().subscribe({
      next: (response) => {
        if (response != null || response != '') {
          this.user = response
        }
      }
    });
  }

  signOut() {
    this.userService.signOut();
    localStorage.removeItem('authToken');
    this.router.navigate(['/home'])
  }

}
