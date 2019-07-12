import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interested',
  templateUrl: './interested.page.html',
  styleUrls: ['./interested.page.scss'],
})
export class InterestedPage implements OnInit {



  public recommend: any;
  public interested: any;

  public navFlag = false;

  constructor() { }


  ngAfterViewInit(): void {
  }

  ngOnInit() {
  }

}
