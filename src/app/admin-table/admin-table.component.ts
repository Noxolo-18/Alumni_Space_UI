//admin-table.component.ts
import { Component } from '@angular/core';


@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent {
  data = [
    { user: 'User 1', query: 'Hello, I have a question.', status: 'Unanswered', response: '', timestamp: null as Date | null },
    { user: 'User 2', query: 'Need assistance with an order.', status: 'Unanswered', response: '', timestamp: null as Date | null }
  ];
  
  
  responseForms: boolean[] = new Array(this.data.length).fill(false);

  toggleResponseForm(index: number) {
    this.responseForms[index] = !this.responseForms[index];
  }

  
  submitResponse(index: number) {
    this.data[index].status = 'Answered';
    this.data[index].timestamp = new Date();
    this.responseForms[index] = false;
  }
  
}
