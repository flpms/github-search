import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gs-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {}

  public search(query:any):void {
    this.router.navigate(['profile/', query]);
  }

}
