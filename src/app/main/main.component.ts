import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    scrollTo(0, 0);
    // this.posY = parseFloat(localStorage.getItem('posY'));
    // window.onscroll = () => {
    //   if ( window.location.pathname === '/main' && window.scrollY !== 0) {
    //     localStorage.setItem('posY', String(window.scrollY));
    //   console.log(window.scrollY);
    //   }
  }
}
