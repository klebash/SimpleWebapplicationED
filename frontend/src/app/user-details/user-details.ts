import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/service';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.html'
})
export class UserDetails implements OnInit {
  user?: User;
  currentId?: number; // Για το debug

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.currentId = Number(idParam);
        this.loadUserDetails(this.currentId);
      }
    });
  }

  loadUserDetails(id: number) {
    this.userService.getUserById(id).subscribe({
      next: (data) => {
        this.user = data;
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('API Error:', err);
      }
    });
  }
}