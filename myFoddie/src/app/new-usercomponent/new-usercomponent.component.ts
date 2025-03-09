import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-usercomponent',
  templateUrl: './new-usercomponent.component.html',
  styleUrls: ['./new-usercomponent.component.css']
})
export class NewUsercomponentComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email], this.emailTakenValidator.bind(this)],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,14}$/)
      ]]
    });
  }

  emailTakenValidator(control: any) {
    return new Promise(resolve => {
      this.http.get<any[]>('http://localhost:3000/users').subscribe(users => {
        const emailTaken = users.some(user => user.email === control.value);
        resolve(emailTaken ? { emailTaken: true } : null);
      });
    });
  }
  onSubmit(): void {
    if (this.registerForm.valid) {
      this.http.post('http://localhost:3000/users', this.registerForm.value).subscribe(() => {
        console.log('User registered:', this.registerForm.value);
        this.router.navigate(['/login']);
      });
    }
  }
}