import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'qs-main',
  templateUrl: './main.layout.html',
})

export class MainLayout implements OnInit {

  routes: Object[] = [
    {
      title: 'Home',
      route: '/',
      icon: 'dashboard',
    },
    {
      title: 'Progress',
      route: '/progress',
      icon: 'dashboard',
    },
    // {
    //   title: 'Course',
    //   route: '/',
    //   icon: 'dashboard',
    // },
    {
      title: 'Companies/Organisations',
      route: '/companies',
      icon: 'dashboard',
    },
    {
      title: 'Documents',
      route: '/documents',
      icon: 'dashboard',
    },
    // {
    //   title: 'Profile',
    //   route: '/test',
    //   icon: 'dashboard',
    // },
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // no op
  }

}
