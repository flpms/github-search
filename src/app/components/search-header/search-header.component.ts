import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gs-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css']
})
export class SearchHeaderComponent implements OnInit {

  public isSearchLayout: boolean = true;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    let { snapshot } = this.route;
    this.isSearchLayout = this.checkRouteConfig(snapshot);
  }

  private checkRouteConfig(snapshot):boolean {
    let { path } = snapshot.routeConfig;
    return (path === 'search');
  }

  public search(query:any):void {
    this.router.navigate(['profile/', query]);
  }

  public goBack():void {
    !this.isSearchLayout && this.router.navigate(['search/']);
  }
}
