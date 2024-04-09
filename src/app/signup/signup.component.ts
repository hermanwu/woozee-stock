import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { AuthService } from '../shared/services/auth.services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupForm;

  constructor(
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    private router: Router
  ) {}

  signupWithEmail() {
    const { email, password } = this.signupForm.value;

    this.authService
      .register(email, password)
      .then(() => {
        console.log('Signed up with email');
        // Redirect to the login page upon successful signup
        this.router.navigate(['/login']); // Adjust '/login' as per your route configuration
      })
      .catch((error) => {
        console.error('Error signing up:', error);
      });
  }

  signupWithGoogle(): Promise<void> {
    return this.afAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        console.log('Signed up with Google');
        this.router.navigate(['/news']);
      })
      .catch((error) => console.error('Error:', error));
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
}
