import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'qs-main',
  templateUrl: './main.layout.html',
})

export class MainLayout implements OnInit {
  navmenu: Object[] = [{
    icon: 'looks_one',
    route: '.',
    title: 'Recipe',
    description: 'List of food recipe',
  }
  ];

  constructor(public media: TdMediaService, private router: Router) {}

  ngOnInit(): void {
    // no op
  }

}
