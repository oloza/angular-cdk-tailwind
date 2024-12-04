import { Component } from '@angular/core';
import { CdkDragDrop,moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html'
})
export class BoardComponent {

  drop($event:CdkDragDrop<any[]>){
  // drop($event:any){
    console.log($event);
  }
}
