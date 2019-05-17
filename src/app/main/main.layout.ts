import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'qs-main',
  templateUrl: './main.layout.html',
})

export class MainLayout implements OnInit {
  navmenu: Object[] = [
    {
    icon: 'looks_one',
    route: '.',
    title: 'Recipes',
    description: 'List of food recipes',
  },
    {
    icon: 'looks_two',
    route: '.',
    title: 'Orders',
    description: 'List of orders',
  },


  ];

  constructor(public media: TdMediaService, private router: Router) {}

  ngOnInit(): void {
    // no op
  }

}
