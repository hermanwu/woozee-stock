import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup } from '@angular/forms';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private afAuth: AngularFireAuth) {}

  signupWithEmail() {
    const { email, password } = this.signupForm.value;
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => console.log('Signed up with email'))
      .catch((error) => console.error('Error:', error));
  }

  signupWithGoogle() {
    this.afAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => console.log('Signed up with Google'))
      .catch((error) => console.error('Error:', error));
  }
}
