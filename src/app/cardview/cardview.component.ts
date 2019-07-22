import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-cardview', // nombre para llamar el componente
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements OnInit {
  @Input() idTask:string;
  @Input() task:string;
  @Input() descr:string;
  @Output() data = new EventEmitter();
  
  
  constructor() { 
  }

  ngOnInit() {
  }

  delete(){
    let taskToDelete = this.idTask
    this.data.emit(taskToDelete)
 
  }



}
