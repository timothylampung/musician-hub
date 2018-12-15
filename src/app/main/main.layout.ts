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
    title: 'First item',
    description: 'Item description',
  }, {
    icon: 'looks_two',
    route: '.',
    title: 'Second item',
    description: 'Item description',
  }, {
    icon: 'looks_3',
    route: '.',
    title: 'Third item',
    description: 'Item description',
  }, {
    icon: 'looks_4',
    route: '.',
    title: 'Fourth item',
    description: 'Item description',
  }, {
    icon: 'looks_5',
    route: '.',
    title: 'Fifth item',
    description: 'Item description',
  },
  ];

  constructor(public media: TdMediaService, private router: Router) {}

  ngOnInit(): void {
    // no op
  }

}
