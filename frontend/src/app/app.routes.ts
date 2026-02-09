import { Routes } from '@angular/router';
import { Home } from './home/home';
import { RegisterUser } from './register-user/register-user';
import { UserList } from './user-list/user-list';
import { UserDetails } from './user-details/user-details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'register', component: RegisterUser },
  { path: 'users', component: UserList },
  { path: 'user-details/:id', component: UserDetails }
];