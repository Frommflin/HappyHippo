import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'hippo-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../../styles/css/sign-in.component.css']
})
export class SignInComponent {
  credentials: IUser = { username: '', password: '' };

  constructor(private userService: UserService, private router: Router) { }

  signIn() {
    this.userService.signIn(this.credentials).subscribe({
      next: () => this.router.navigate(['/books'])
    });
  }
}
