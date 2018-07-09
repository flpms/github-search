import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gs-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() query = new EventEmitter<string>();

  ngOnInit() {
  }

  public search(query:string):void {
    if (query) {
      this.query.emit(query);
    }
  }

}
