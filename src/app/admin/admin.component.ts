import { Component, AfterViewInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements AfterViewInit {

  constructor(public NgxSmartModalService: NgxSmartModalService) {

  }

    ngAfterViewInit() {
    }

}
