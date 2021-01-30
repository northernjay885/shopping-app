import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayParagraph = false;
  btnClicks = [];

  changeParagraphStatus(event: any) {
    this.displayParagraph = !this.displayParagraph;
    this.btnClicks.push(new Date());
  }
}
