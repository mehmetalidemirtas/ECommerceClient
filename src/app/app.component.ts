import { Component } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ECommerceClient';
  constructor(private toastr: CustomToastrService){
    toastr.message("Welcome to AliBaBa","Welcome", {
      messageType : ToastrMessageType.Info,
      position: ToastrPosition.TopCenter
    });
  }
}