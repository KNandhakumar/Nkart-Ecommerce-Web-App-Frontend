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
      .catch(err => alert('error' + err.message));
    });
  };
}
