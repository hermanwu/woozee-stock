import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { AuthService } from '../../shared/services/auth.services';

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
    private router: Router,
    private firestore: AngularFirestore
  ) {}

  async signupWithEmail() {
    const { email, password } = this.signupForm.value;

    try {
      const userCredential = await this.authService.register(email, password);
      const user = userCredential.user;

      // Update the user's profile with the username
      await user.updateProfile({
        displayName: this.generateUsername(email),
      });
      await this.createUserDoc(user);

      console.log('Signed up with email');
      this.router.navigate(['/news']);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  }

  async signupWithGoogle(): Promise<void> {
    try {
      const userCredential = await this.afAuth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
      const user = userCredential.user;

      // Generate a username based on the user's email or name
      const displayName = this.generateUsername(user.email);

      // Update the user's profile with the generated username
      await user.updateProfile({
        displayName,
      });
      await this.createUserDoc(user);

      console.log('Signed up with Google');
      this.router.navigate(['/news']);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  ngOnInit() {
    this.signupForm = new UntypedFormGroup({
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new UntypedFormControl('', Validators.required),
    });
  }

  private async createUserDoc(user: firebase.User): Promise<void> {
    const userRef = this.firestore.collection('users').doc(user.uid);
    const userDoc = await userRef.get().toPromise();

    if (!userDoc.exists) {
      const userData: any = {
        uid: user.uid,
        email: user.email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      };

      try {
        await userRef.set(userData);
        console.log('User document created successfully');
      } catch (error) {
        console.error('Error creating user document:', error);
      }
    } else {
      console.log('User document already exists');
    }
  }

  private generateUsername(value: string): string {
    const username =
      value.split('@')[0].slice(0, 5) + Math.floor(Math.random() * 1000000);
    return username;
  }
}
