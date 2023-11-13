import { Component, DoCheck } from '@angular/core';

// Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  public setEmitTaskList(event: string) {
    this.taskList.push(
      { task: event, checked: false }
    );
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirmation = window.confirm("Você deseja realmente apagar todas as Tasks?");
    if (confirmation) {
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirmation = window.confirm("A Task está vazia, deseja deleta-la?");

      if (confirmation) {
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }

}
