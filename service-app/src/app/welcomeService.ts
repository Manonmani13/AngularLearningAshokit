import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // This makes it available throughout the app
})
export class WelcomeService {
  getWelcomeMsg(): string {
    return "Welcome to Website";
  }
}
