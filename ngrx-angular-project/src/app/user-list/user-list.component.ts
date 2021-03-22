import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { select, Store } from '@ngrx/store';
import { selectUsers, selectUserState } from '../store/selector/user.selectors';
import { State } from '../store/reducer/user.reducer';
import { addUser } from '../store/action/user.actions';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]>;
  userDetails: any;

  constructor(private store: Store<State>, private userDataService: UserDataService) { 
    this.users$ = this.store.pipe(select(selectUsers));
  }

  ngOnInit(): void {
    this.displayUsers();
  }

  addUser(userName: string): void {
    const user = new User();
    user.name = userName;
    this.store.dispatch(addUser(user));
  }

  public displayUsers() {
    this.userDataService.getUsers().subscribe(data => {
      this.userDetails = data;
      console.log(this.userDetails);
      });
  }

}
