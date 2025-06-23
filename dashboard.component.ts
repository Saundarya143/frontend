import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }

  displayedColumns: string[] = ['user', 'vaccine', 'date', 'status'];
  recentActivity = [
    { user: 'Saundarya', vaccine: 'Covaxin', date: '2025-06-20', status: 'Completed' },
    { user: 'Shruti', vaccine: 'Covishield', date: '2025-06-21', status: 'Scheduled' },
    { user: 'Kartikeyan', vaccine: 'Sputnik', date: '2025-06-19', status: 'Cancelled' },
    { user: 'Sahil', vaccine: 'Covaxin', date: '2025-06-22', status: 'Cancelled' },
    { user: 'Prateek', vaccine: 'Covaxin', date: '2025-06-24', status: 'Scheduled' },
  ];
}

