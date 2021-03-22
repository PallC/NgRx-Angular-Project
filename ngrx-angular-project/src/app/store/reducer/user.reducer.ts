import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../action/user.actions';
import { User } from '../../models/user';
import { Post } from '../../models/post';

export const userFeatureKey = 'user';
export const postFeatureKey = 'post';

export interface State {
  users: User[],
  posts: Post[]
}

export const initialState: State = {
  users: [],
  posts: []
};


export const userReducer = createReducer(
  initialState,
  on(UserActions.addUser,
    (state: State, {user}) => 
    ({...state,
    users: [...state.users, user]
  })),
  on(UserActions.addPost,
    (state: State, {post}) => 
    ({...state,
    posts: [...state.posts, post]
  }))
);


export function reducer(state: State | undefined, action: Action): any {
  return userReducer(state, action);
}