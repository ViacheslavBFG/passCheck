import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent {
  username: string = '';
  password: string = '';
  strengthClasses: string[] = ['gray', 'gray', 'gray'];
  strengthText: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  goToNextPage(): void {
    // Сохраните данные в сервисе
    this.authService.setCredentials(this.username, this.password);
    // Перейдите на страницу пользователя
    this.router.navigate(['/user']);
  }

  checkStrength() {
    this.strengthClasses = ['gray', 'gray', 'gray'];
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /[0-9]/.test(this.password);
    const hasSymbols = /[^a-zA-Z0-9]/.test(this.password);

    if (this.password.length === 0) {
      this.strengthText = '';
    } else if (this.password.length < 8) {
      this.strengthClasses = ['red', 'red', 'red'];
      this.strengthText = 'Password is too short';
    } else if (hasLetters && hasNumbers && hasSymbols) {
      this.strengthClasses = ['green', 'green', 'green'];
      this.strengthText = 'Password is strong 😉';
    } else if (
      (hasLetters && hasNumbers) ||
      (hasLetters && hasSymbols) ||
      (hasNumbers && hasSymbols)
    ) {
      this.strengthClasses = ['yellow', 'yellow', 'gray'];
      this.strengthText = 'Password is medium 🙄';
    } else {
      this.strengthClasses = ['red', 'gray', 'gray'];
      this.strengthText = 'Password is easy 😕';
    }
  }
}
