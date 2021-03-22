import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { select, Store } from '@ngrx/store';
import { selectUsers, selectUserState, selectPostState, selectPosts } from '../store/selector/user.selectors';
import { State } from '../store/reducer/user.reducer';
import { addPost, addUser } from '../store/action/user.actions';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.scss']
})
export class AddPostsComponent implements OnInit {

  posts$: Observable<Post[]>

  constructor(private store: Store<State>) { 
    this.posts$ = this.store.pipe(select(selectPosts));
  }

  ngOnInit(): void {
  }

  addPost(title: string, body:string): void {
    const post = new Post();
    post.title = title;
    post.body = body;
    this.store.dispatch(addPost(post));
  }

}
