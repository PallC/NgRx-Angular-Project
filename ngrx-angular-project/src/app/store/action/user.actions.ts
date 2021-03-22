import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user';
import { Post } from '../../models/post';

export const loadUsers = createAction(
  '[User] Load Users'
);

export const addUser = createAction(
  '[User] Add User',
  (user: User) => ({user})
);

export const addPost = createAction(
  '[Post] Add Post',
  (post: Post) => ({post})
);




