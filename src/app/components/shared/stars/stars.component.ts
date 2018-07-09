import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gs-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input() count:number = 0;

  constructor() { }

  ngOnInit() {
  }

}
