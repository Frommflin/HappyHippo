import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'hippo-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../styles/css/register.component.css']
})
export class RegisterComponent {
  password: string = '';
  confirmPassword: string = '';
  username: string = '';
  credentials: IUser = { username: '', password: '' };

  constructor(private userService: UserService, private router: Router) { }

  createAccount() {
    this.credentials = { username: this.username, password: this.password };

    this.userService.createUser(this.credentials).subscribe({
      next: (response) => {
        localStorage.setItem('authToken', response.token);
        this.router.navigate(['/books'])
      }
    });
  }
}
