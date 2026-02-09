import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { UserService } from '../services/service';
import { User } from '../models/user';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [CommonModule,RouterLink, FormsModule],
  templateUrl: './register-user.html',
  styleUrl: './register-user.css'
})
export class RegisterUser {
  user: User = {
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '' ,
    addresses: []
  };

  homeAddressText: string = ''
  workAddressText: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.user.addresses = [];

    if (this.homeAddressText) {
      this.user.addresses.push({ addressText: this.homeAddressText, addressType: 'HOME' });
    }
    if (this.workAddressText) {
      this.user.addresses.push({ addressText: this.workAddressText, addressType: 'WORK' });
    }

    this.userService.saveUser(this.user).subscribe({
      next: (data) => {
        console.log('User registered successfully!', data);
        this.router.navigate(['/users']); 
      },
      error: (error) => console.error('Error during registration', error)
    });
  }
}