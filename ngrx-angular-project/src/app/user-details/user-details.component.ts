import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../shared/user-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public id: number;
  private allPosts: any;
  public userPosts: any;
  public userDetails: any;
  private allUsersDetails: any;

  constructor(private userDataService: UserDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getUserPosts(this.id);
    this.getUserDetails(this.id);
  }

  public getUserPosts(id: number) {
    this.userDataService.getPosts().subscribe(data => {
      this.allPosts = data;
      console.log('data '+this.allPosts);
      this.userPosts = this.allPosts.filter(item => item.userId == id);
      console.log('userPosts '+ this.userPosts);
    });
  }

  public getUserDetails(id: number) {
    const self = this;
    this.userDataService.getUsers().subscribe(response => {
      this.allUsersDetails = response;
      this.allUsersDetails.forEach(function(item) {
        item.id == id ? self.userDetails = item : '';
      });
      console.log('userDetails '+this.userDetails);
    });
  }

}
