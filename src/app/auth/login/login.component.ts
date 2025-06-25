import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private auth:Auth, private router:Router){}
  errorMessage = '';
  email = '';
  password = '';

  onLogin(){
    signInWithEmailAndPassword(this.auth,this.email,this.password)
    .then(() => {
      alert('Login successful!');
      this.router.navigate(['/shop']); // redirect to shop page
    })
    .catch(err => {
      if(err.code === 'auth/user-not-found'){
        alert('No user found with this email');
      }
      else if(err.code === 'auth/wrong-password'){
        alert('Incorrect password');
      }
      else if(err.code === 'auth/invalid-email'){
        this.errorMessage = 'No user found with this email';
      }
      else {
        alert('Something went wrong');
      }
    });
  };
}
