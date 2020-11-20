import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public springImagePath = '../assets/images/spring/spring1.jpeg';
  public summerImagePath = '../assets/images/summer/summer1.jpeg';
  public fallImagePath = '../assets/images/fall/fall1.jpeg';
  public winterImagePath = '../assets/images/winter/winter1.jpeg';

  changeBackgroundImage(season, imagePath): void { // todo : reformat ça sans tous les if
    if (season === 'spring') {
      this.springImagePath = imagePath;
    }
    if (season === 'summer') {
      this.summerImagePath = imagePath;
    }
    if (season === 'fall') {
      this.fallImagePath = imagePath;
    }
    if (season === 'winter') {
      this.winterImagePath = imagePath;
    }
  }
}
