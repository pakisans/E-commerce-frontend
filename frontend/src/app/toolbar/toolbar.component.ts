import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() inputSideNav: MatSidenav;

  isLoggedIn$: Observable<boolean>;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('currentMail');
    this.router.navigate([''])
  }

}
