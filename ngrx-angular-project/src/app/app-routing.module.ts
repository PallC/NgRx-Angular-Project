import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddPostsComponent } from './add-posts/add-posts.component';

const routes: Routes = [
  {path: '', component: UserListComponent},
  {path: 'user/:id', component: UserDetailsComponent},
  {path: 'user', component: AddPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
