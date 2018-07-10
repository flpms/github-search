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
    this.route.params.subscribe(params => this.getUser(params.username));
  }

  private getUser(name:string) {
    console.log('consulting', name);
    this.usersService.getUser(name).subscribe((result:any) => {
      if (!result) {
        return this.router.navigate(['not-found/', name]);
      }

      this.user = result;
      this.getUserRepos(name);
    });
  }

  private getUserRepos(username:string) {
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
