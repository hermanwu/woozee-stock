import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

  async signUp(email: string, password: string) {
    await this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  async signIn(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async signOut() {
    await this.afAuth.signOut();
  }

  getLoggedInUsername(): Observable<string | null> {
    return this.afAuth.authState.pipe(
      map((user) => {
        return user ? user.displayName : null;
      })
    );
  }

  getLoggedInDisplayName(): Observable<string | null> {
    return this.afAuth.authState.pipe(
      map((user) => {
        return user ? user.displayName || user.email : null;
      })
    );
  }
}
