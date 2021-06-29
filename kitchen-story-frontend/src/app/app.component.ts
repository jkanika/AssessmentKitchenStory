import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // data
  title = 'Movie Chaska';
  
  //logic
  showTitle() {
    return this.title;
  }
}
