import { Component, OnInit } from '@angular/core';
import { faBox, faBell,faWaveSquare, faClock,faAngleUp,faAngleDown,
  faHeart, faBorderAll, faUsers, faGear,} from '@fortawesome/free-solid-svg-icons';
import { faTrello, } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent implements OnInit {

  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faBell=faBell;
  faAngleUp=faAngleUp;
  faAngleDown=faAngleDown;
  faHeart=faHeart;
  faBorderAll=faBorderAll;
  faUsers=faUsers;
  faGear=faGear;

  constructor() { }

  ngOnInit(): void {
  }

}

/*
import { Component, OnInit } from '@angular/core';
import { faBox, faWaveSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent implements OnInit {

  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;

  constructor() { }

  ngOnInit(): void {
  }

}
*/