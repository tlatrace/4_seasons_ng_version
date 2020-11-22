import {Component, Input, OnInit} from '@angular/core';
import {camelize} from 'tslint/lib/utils';

@Component({
  selector: 'season-title',
  templateUrl: './season-title.component.html',
  styleUrls: ['./season-title.component.css']
})
export class SeasonTitleComponent implements OnInit {
  @Input() public season: string;
  public title: string;
  constructor() { }

  ngOnInit(): void {
    this.title = this.season; //mettre une majuscule avec une fonction ici
  }

}
