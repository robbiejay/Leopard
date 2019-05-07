import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
    apiKey: "AIzaSyB_y26KgbyRzbg7gXltTN8k4wQDJgrPc_w",
    authDomain: "leopard-wealth.firebaseapp.com"
 })
  }

  title = 'leopard-wealth';
}
