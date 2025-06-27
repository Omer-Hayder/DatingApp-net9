import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NavComponent } from "./nav/nav.component";
import { AccountService } from './_services/account.service';
import { RouterModule } from '@angular/router';
import { NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, NavComponent, NgxSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DatingApp';
  private accountService = inject(AccountService);

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userString = localStorage.getItem("user");
    if (!userString) return;
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }

}
