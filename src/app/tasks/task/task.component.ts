import { Component, Input, inject } from '@angular/core';
import { type Task } from './task.model'; // type here describe that Task is type definition
import { DatePipe } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  // @Output() complete = new EventEmitter<string>();
  // constructor(private TasksService: TasksService) {} // (16 and 17) we can use any one of them
  private tasksService = inject(TasksService);
  onCompletedTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
