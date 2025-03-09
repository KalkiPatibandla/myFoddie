import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-details-component',
  templateUrl: './customer-details-component.component.html',
  styleUrls: ['./customer-details-component.component.css']
})
export class CustomerDetailsComponentComponent implements OnInit {
  username: string = '';
  profileMenuVisible: boolean = false;
  availableCash: number = 0;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.username = this.getUsernameFromLocalStorage();
    this.availableCash = this.getAvailableCashFromLocalStorage();
  }
  toggleProfileMenu(): void {
    this.profileMenuVisible = !this.profileMenuVisible;
  }

  navigateToChangePassword(): void {
    this.router.navigate(['/change-password']);
  }

  logout(): void {
    this.clearLocalStorage();
    this.router.navigate(['/login']);
  }

  getUsernameFromLocalStorage(): string {
    return localStorage.getItem('username') || 'Guest';
  }

  getAvailableCashFromLocalStorage(): number {
    return parseInt(localStorage.getItem('availableCash') || '0', 10);
  }
  clearLocalStorage(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('availableCash');
  }
}
