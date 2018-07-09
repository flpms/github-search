import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gs-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  @Output() backToSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public goBackToSearch():void {
    this.backToSearch.emit();
  }

}
