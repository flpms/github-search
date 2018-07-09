import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gs-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css']
})
export class SearchHeaderComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  public search(query:any):void {
    this.router.navigate(['profile/', query]);
  }
}
