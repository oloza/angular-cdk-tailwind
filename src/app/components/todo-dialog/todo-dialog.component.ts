import { Component,Inject,OnInit } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { faClose,faCheckToSlot,faBars,faUser,faTag,faCheckSquare,faClock } from '@fortawesome/free-solid-svg-icons';
import { ToDo } from 'src/app/models/todo.model';

interface InputData {
  todo:ToDo;
}

interface OutputData {
  rta:boolean;
}

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent implements OnInit{
  faClose=faClose;
  faCheckToSlot=faCheckToSlot;
  faBars=faBars;
  faUser=faUser;
  faTag=faTag;
  faCheckSquare=faCheckSquare;
  faClock=faClock;

 todo: ToDo;
constructor(
  private dialogRef:DialogRef<OutputData>,
  @Inject(DIALOG_DATA) data:InputData
){
  this.todo=data.todo;
} 

ngOnInit(): void {
    
}

  close(){
    this.dialogRef.close({
      rta:true,
    });
  }

  closeWithRta(rta:boolean){
  
  }

}
