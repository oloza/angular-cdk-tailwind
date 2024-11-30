import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  isOpen = false;
  faClose: any='x';
  constructor() { }

  ngOnInit(): void {
  }

}
