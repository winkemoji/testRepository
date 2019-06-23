import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {



  public recommend: any;
  public interested: any;



  constructor() { }

  searchWord = '';

  ngAfterViewInit(): void {
    this.interested = document.getElementById('interested');
    console.log(this.interested.style);
    // let interested = this.interested.nativeElement;
    // console.log(interested);
  }

  recommendClick() {
    console.log('aaa');
  }

  interestedClick() {

  }
}
