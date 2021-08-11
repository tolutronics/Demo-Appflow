import { Component } from '@angular/core';
import { Toast } from '@ionic-native/toast/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private toast: Toast) { 

    
  }

showToast(){
  this.toast.show(`I'm a toast`, '5000', 'center').subscribe(
    toast => {
      console.log(toast);
    }
  );
}


}
