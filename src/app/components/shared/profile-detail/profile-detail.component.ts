import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gs-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  @Input() user:any;

  constructor() { }

  ngOnInit() {
  }

}
