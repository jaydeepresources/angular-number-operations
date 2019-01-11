import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  no: number
  myColor: string

  constructor() {
    this.no = 0
    this.myColor = 'text-primary'
  }

  setColor() {
    if (this.no > 0)
      this.myColor = 'text-success'
    else if (this.no < 0)
      this.myColor = 'text-danger'
    else
      this.myColor = 'text-primary'
  }

  increase() {
    this.no++
    this.setColor()
  }

  decrease() {
    this.no--
    this.setColor()    
  }

}
