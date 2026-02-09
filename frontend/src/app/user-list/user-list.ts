import { Component , OnInit,ChangeDetectorRef} from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit{
  users: User[] = []; // Εδώ θα αποθηκευτούν οι χρήστες από τη MySQL
  filteredUsers: User[] = [];   // Αυτοί που βλέπει ο χρήστης
  searchTerm: string = ''; 
  constructor(private userService: UserService,private cdr: ChangeDetectorRef,private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.filteredUsers = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Could not load users', err)
    });
  }

  onDelete(id: number) {
    if (confirm('Είσαι σίγουρος ότι θέλεις να διαγράψεις αυτόν τον χρήστη;')) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          this.users = this.users.filter(u => u.id !== id);
          this.cdr.detectChanges();
          this.filterUsers();
        },
        error: (err: any) => {
          console.error('Error deleting user', err);
          alert('Αποτυχία διαγραφής. Ελέγξτε αν το Backend υποστηρίζει Delete.');
        }
      });
    }
  }

  viewDetails(id: number | undefined) {
  if (id === undefined) return;

  const url = this.router.serializeUrl(
    this.router.createUrlTree(['/user-details', id])
  );
  
  window.open(url, '_blank'); 
}

  filterUsers() {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(user => 
      user.firstName.toLowerCase().includes(term) || 
      user.lastName.toLowerCase().includes(term)
    );
  }
}
