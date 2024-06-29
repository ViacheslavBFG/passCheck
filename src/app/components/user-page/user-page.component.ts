import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Получите данные из сервиса
    const credentials = this.authService.getCredentials();
    this.username = credentials.username;
    this.password = credentials.password;
  }

  goToHomePage(): void {
    this.router.navigate(['/home']);
  }
}
