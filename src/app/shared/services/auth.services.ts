import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth, private _snackBar: MatSnackBar) {}

  register(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('Signed up with email');
        // Send verification email
        userCredential.user.sendEmailVerification();
        return userCredential;
      })
      .then((userCredential) => {
        let snackBarRef = this._snackBar.open(
          'Verification email sent. Please verify your email address.',
          'Close'
        );

        snackBarRef.onAction().subscribe(() => {
          snackBarRef.dismiss();
        });

        return userCredential;
      })
      .catch((error) => {
        console.error('Error:', error);
        // Re-throw the error so it can be caught by the caller of the register function.
        throw error;
      });
  }

  signInWithEmailAndPassword(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signInWithGoogle(): Promise<any> {
    return this.afAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => console.log('Logged in with Google'))
      .catch((error) => console.error('Google Login error:', error));
  }

  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }

  getUser(): Observable<firebase.User> {
    return this.afAuth.authState;
  }

  async updateDisplayName(displayName: string): Promise<void> {
    const user = await this.afAuth.currentUser;
    if (user) {
      return user.updateProfile({
        displayName: displayName,
      });
    } else {
      throw new Error('User not authenticated');
    }
  }
}
