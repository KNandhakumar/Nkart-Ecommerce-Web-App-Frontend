import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-signup',
  imports: [CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private auth:Auth, private router:Router){}
  email = '';
  password = '';

  onSignup(){
    createUserWithEmailAndPassword(this.auth,this.email,this.password)
    .then(() => {
      alert('Signup successful!');
      this.router.navigate(['/login'])
    })
    .catch(err => {
      // already email exists
      if(err.code === 'auth/email-already-in-use'){
        alert('Email already exists. Please login instead.');
        this.router.navigate(['/login']); // redirect to login page
      }
      // invalid email
      else if(err.code === 'auth/invalid-email'){
        alert('Invalid email format');
      }
      // weak password
      else if(err.code === 'auth/weak-password'){
        alert('password should be at least 6 characters');
      }
      else {
        alert('Something went wrong' + " " + err.message);
      };
    });
  };
}
