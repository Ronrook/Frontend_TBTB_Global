import { Routes } from '@angular/router';
import { UserComponent } from './components/users/user.component';
import { UserInfoComponent } from './components/users/user-info.component';

export const routes: Routes = [
    {path: '',redirectTo: 'users', pathMatch: 'full'},
    { path: 'users', component: UserComponent },
    { path: 'user/information/:id', component: UserInfoComponent }
];
