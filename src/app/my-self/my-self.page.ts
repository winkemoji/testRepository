import { Component, OnInit, ViewChild , ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-my-self',
  templateUrl: './my-self.page.html',
  styleUrls: ['./my-self.page.scss'],
})
export class MySelfPage implements OnInit {

  @ViewChild('canvas')canvas: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  drawArc() {
    let canvas = this.canvas.nativeElement;
    let ctx  = canvas.context('2d');
    let width = canvas.width;
    let height =canvas.height;
    let clockDimensions = width / 2;
    ctx .clearRect(0, 0, width, height);
    ctx .beginPath();
    var index = 0;
    const draw = () => {
      index++;
      if (index > 360) {
            index = 0;
        }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(250, 250, 200, Math.PI / 180 * 270,  Math.PI / 180  * (index +270));
      ctx.strokeStyle = "green";
      ctx.lineWidth=100;
      ctx.stroke();
    }
    draw();
  }
}
