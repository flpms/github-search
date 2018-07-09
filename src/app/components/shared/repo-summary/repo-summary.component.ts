import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gs-repo-summary',
  templateUrl: './repo-summary.component.html',
  styleUrls: ['./repo-summary.component.css']
})
export class RepoSummaryComponent implements OnInit {

  @Input() repo;

  constructor() { }

  ngOnInit() {
  }

}
