import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router
  ) {

  }
  title = 'jackdan-breadcrumb';
  ngOnInit(): void {
    
  }
}
