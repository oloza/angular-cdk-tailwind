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

  items=[
    {
      label:'item 1',
      items:[
       { 
        label:'sub tem 1.1',
       },
       { 
        label:'sub tem 1.2',
       }
      ]
    },
    {
      label:'item 2',
      items:[
       { 
        label:'sub tem 2.1',
       },
      
      ]
    },
    {
      label:'item 3',
      items:[
       { 
        label:'sub tem 3.1',
       },
       { 
        label:'sub tem 3.2',
       },
       { 
        label:'sub tem 3.3',
       },
      
      ]
    }



  ]

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