import { Component, OnInit } from '@angular/core';
import { CdkDragDrop,moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ToDo, Column } from '../../models/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles:[
    `
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
    `
  ]
})
export class BoardComponent implements OnInit{
ngOnInit(): void {
    
}

  columns:Column[] = [
    {
      title:'ToDo', 
      todos:[
        {id:'1',title:'todo 1'},
        {id:'2',title:'todo 2'},
        {id:'3',title:'todo 3'},
      ]
    },
    {
      title:'Doing',
      todos:[
        {id:'1',title:'todo 1'},
        {id:'2',title:'todo 2'},
        {id:'3',title:'todo 3'},
      ]
    },
    {
      title:'Done',
      todos:[
        {id:'1',title:'todo 1'},
        {id:'2',title:'todo 2'},
        {id:'3',title:'todo 3'},
      ]
    }


  ]

  todos:ToDo[] = [
    {
      id:'1',
      title:'todo 1'
    },
    {
      id:'2',
      title:'todo 2'
    },
    {
      id:'3',
      title:'todo 3'
    },
  ]

 doing:ToDo[] = [
  {
    id:'4',
    title:'todo 4'
  },
 ];

 done:ToDo[] = [
  {
    id:'5',
    title:'todo 5'
  },
 ];

  drop(event:CdkDragDrop<ToDo[]>){
    if(event.previousContainer===event.container){
    moveItemInArray(this.todos,event.previousIndex,event.currentIndex);
    }else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
}
addColumn(){
  this.columns.push({
    title:'New Column',
    todos:[]
  })
}

}