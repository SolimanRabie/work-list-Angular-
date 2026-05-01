import {
  Component,
  EventEmitter,
  inject,
  input,
  Input,
  Output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output()
  close = new EventEmitter<void>();
  enterdTitle = '';
  enterdSummery = '';
  enterdDate = '';

  private TasksService = inject(TasksService);
  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.TasksService.addTask(
      {
        title: this.enterdTitle,
        summery: this.enterdSummery,
        date: this.enterdDate,
      },
      this.userId,
    );
    this.close.emit();
  }
}
