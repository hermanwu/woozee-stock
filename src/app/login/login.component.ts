import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: UntypedFormGroup;
  errorMessage: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = new UntypedFormGroup({
      email: new UntypedFormControl(null, [Validators.required, Validators.email]),
      password: new UntypedFormControl(null, Validators.required),
    });
  }

  loginWithEmail() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService
        .signInWithEmailAndPassword(email, password)
        .then((result) => {
          if (result.user && result.user.emailVerified) {
            console.log('Logged in successfully');
            // Navigate to the next page since the email is verified
            this.router.navigate(['/news']); // Adjust as per your routing setup
          } else {
            // Handle the case where the email is not verified
            this.errorMessage = 'Please verify your email before logging in.';
            // Optionally, sign the user out if you don't want an unverified user to be signed in
            this.afAuth.signOut();
          }
        })
        .catch((error) => {
          console.error('Login error:', error);
          // Handle login errors (e.g., show an error message)
          this.errorMessage =
            'Failed to login. Please check your email and password.';
        });
    }
  }

  loginWithGoogle() {
    this.authService.signInWithGoogle().then(() => {
      // Navigate to the next page after successful login
      this.router.navigate(['/news']); // Adjust as per your routing setup
    });
  }

  navigateToSignup() {
    // Navigate to the signup page
    this.router.navigate(['/signup']); // Adjust as per your routing setup
  }
}
