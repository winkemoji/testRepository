import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Config } from '@ionic/angular';
import { element } from '@angular/core/src/render3';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {


  inputValue = 50;

  // @ViewChild('searchInput')searchInput: ElementRef;
  @ViewChild('searchInput') searchInput;

  constructor(private config: Config) {
    this.config.set('backButtonText', '取消');
    this.config.set('backButtonIcon', '');
    // setTimeout(() => {
    //   this.searchInput.focus();//为输入框设置焦点
    // },150);
   }
   ngAfterViewInit(): void {

    setTimeout(() => {
      this.searchInput.setFocus();//为输入框设置焦点
    }, 150);

   }

  ngOnInit() {
  }

}
