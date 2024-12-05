import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {OverlayModule} from '@angular/cdk/overlay';
import {DialogModule} from '@angular/cdk/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BtnComponent } from './components/btn/btn.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { BoardComponent } from './pages/board/board.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TodoDialogComponent } from './components/todo-dialog/todo-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BtnComponent,
    BoardsComponent,
    NavbarComponent,
    BoardComponent,
    TodoDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    AppRoutingModule,
    FontAwesomeModule,
    CdkAccordionModule,
    DragDropModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
