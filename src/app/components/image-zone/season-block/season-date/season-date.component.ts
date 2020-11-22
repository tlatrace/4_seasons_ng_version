import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'season-date',
  templateUrl: './season-date.component.html',
  styleUrls: ['./season-date.component.css']
})
export class SeasonDateComponent implements OnInit {
  @Input() public dateType: 'start date' | 'end date';
  @Input() public startDate: string;
  @Input() public endDate: string;

  constructor() { }

  ngOnInit(): void {
  }

}
