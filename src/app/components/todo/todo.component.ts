import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/ToDo';
import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { TodoRemove } from '../../actions/todo.actions';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Observable<Todo[]>;
  displayedColumns: string[] = ['title'];
  dataSource: any;

  constructor(private store: Store<{todos: Todo[]}>) { 
    store.pipe(select('todos')).subscribe(values => {
      console.log(values);
      this.todos = of(values);
      this.dataSource = new MatTableDataSource<Todo>(values);
    })
    
  }
  removeTodo(index: number) {
    console.log("Index = " + index);
    this.store.dispatch(new TodoRemove(index));
  }

  ngOnInit(): void {
  }

}
