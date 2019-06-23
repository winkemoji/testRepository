import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();

    this.platform.ready().then(()=>{
      this.statusBar.styleDefault();
      // this.statusBar.styleDefault();
      //this.statusBar.overlaysWebView(true);
      // this.statusBar.backgroundColorByHexString('#f8f8f8');
      this.statusBar.backgroundColorByHexString('#FFFFFF');
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
