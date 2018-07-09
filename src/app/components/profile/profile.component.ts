import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UsersService } from './../../services/users.service';

@Component({
  selector: 'gs-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user:any;
  public repos:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('username');
    this.getUser(name);
  }

  private getUser(name:string):void {
    this.usersService
      .getUser(name)
      .subscribe((result:any) => {
        if (!result) {
          return this.router.navigate(['not-found/', name]);
        }

        this.user = result;
        this.getUserRepos(name);
      });
  }

  private getUserRepos(username:string):void {
    this.usersService
        .getRepos(username)
        .subscribe((result) => {
          this.repos = result;
          this.calcStars();
        });
  }

  private calcStars():void {
    this.user.stars = this.repos.reduce((acc, value) => acc + value.stargazers_count, 1);
  }
}
