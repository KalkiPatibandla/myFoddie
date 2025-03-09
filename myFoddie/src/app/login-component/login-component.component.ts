import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.http.get<any[]>('http://localhost:3000/users').subscribe((users: any[]) => {
        const user = users.find((user: { email: any; password: any; }) => user.email === this.loginForm.value.email && user.password === this.loginForm.value.password);
        if (user) {
          console.log('Login successful:', user);
          this.router.navigate(['/customerDetails']); // Change to your desired route
        } else {
          console.error('Invalid credentials');
        }
      });
    }}
}
