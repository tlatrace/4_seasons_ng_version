import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'season-block',
  templateUrl: './season-block.component.html',
  styleUrls: ['./season-block.component.css']
})
export class SeasonBlockComponent implements OnInit {
  @Input() public season: string;
  @Input() public seasonStartDate: string;
  @Input() public seasonEndDate: string;
  @Input() public imagePath: string;
  @Output() public changeBackgroundImageEvent: EventEmitter<{season: string, imagePath: string}> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
    this.imagePath = '../assets/images/' + this.season + '/' + this.season + '1' + '.jpeg';
  }

  changeBackgroundImage(): void {
    let backgroundImageNumber = Number(this.imagePath[this.imagePath.length - 6]);
    if (backgroundImageNumber === 1) {
      backgroundImageNumber = 2;
    }
    else if (backgroundImageNumber === 2) {
      backgroundImageNumber = 3;
    }
    else {
      backgroundImageNumber = 1;
    }
    this.imagePath = '../assets/images/' + this.season + '/' + this.season + backgroundImageNumber + '.jpeg';
    this.changeBackgroundImageEvent.emit({season: this.season, imagePath: this.imagePath});
  }
}
