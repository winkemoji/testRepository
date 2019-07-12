import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {



  public recommend: any;
  public interested: any;

  public navFlag = true;

  constructor() { }


  ngAfterViewInit(): void {
  }

  recommendClick() {
    console.log('aaa');
  }

  interestedClick() {

  }
}
