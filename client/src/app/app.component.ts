import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DatingApp';
  users: any;
  http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get("https://localhost:5001/api/users").subscribe({
      next: (response) => { this.users = response },
      error: () => { },
      complete: () => { }
    });
  }

}
