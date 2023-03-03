import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';
  num1: number = 0;
  hide: boolean = true;

  onClick() {
    this.num1++;
  }
  onDblClick() {
    if(this.hide == true)
    {
      this.hide = false;
    }
    else if(this.hide == false)
    {
      this.hide = true;
    }
  }
}
