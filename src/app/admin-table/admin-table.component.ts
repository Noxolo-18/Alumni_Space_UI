/*// admin-table.component.ts
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
*/
// admin-table.component.ts

import { Component, OnInit } from '@angular/core';
import { AdminTableService } from '../admin.service';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css'],
})
export class AdminTableComponent implements OnInit {
  data: any[] = [];
  responseForms: boolean[] = [];

  constructor(private adminTableService: AdminTableService) {}

  ngOnInit(): void {
    this.loadQueries();
  }

  loadQueries(): void {
    this.adminTableService.getQueries().subscribe(queries => {
      this.data = queries;
      this.responseForms = new Array(this.data.length).fill(false);
    });
  }

  toggleResponseForm(index: number): void {
    this.responseForms[index] = !this.responseForms[index];
  }

  submitResponse(index: number): void {
    const queryId = this.data[index].id; // Adjust this based on your backend model
    const response = this.data[index].response;

    this.adminTableService.submitResponse(queryId, response).subscribe(() => {
      this.data[index].status = 'Answered';
      this.data[index].timestamp = new Date();
      this.responseForms[index] = false;
    });
  }
}
