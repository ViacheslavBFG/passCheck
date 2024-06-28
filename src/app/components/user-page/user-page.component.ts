import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
})
export class UserPageComponent {
  constructor(private router: Router) {}

  goToHomePage() {
    this.router.navigate(['/home']);
  }
}
