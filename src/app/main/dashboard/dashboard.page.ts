import {
  Component
} from '@angular/core';
import { Ingredient, Recipe } from './recipe.model';
import { KitchenService } from '../../../services/kitchen.service';
import { MatDialog } from '@angular/material';
import { PortDialog } from './port-dialog/port.dialog';

@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.styles.scss']
})
export class DashboardPage {

  recipes: Recipe[] = [
    {
      cookingTime: 40,
      imageUrl: 'https://i.ytimg.com/vi/QWc0_2bBGRY/maxresdefault.jpg',
      ingredients: [
        {address : 'B0', name : 'bawang putih'},
        {address : 'B2', name : 'bawang merah'},
        {address : 'A0', name : 'Ayam'},
        {address : 'A1', name : 'Sos'},
      ],
      name: 'Ayam Masak Merah',
      serial: '1,10,10,10,80,10'
    },
    {
      cookingTime: 25,
      imageUrl: 'https://www.kcet.org/sites/kl/files/thumbnails/image/5366965410_61f93fcbbf_b_0.jpg',
      ingredients: [
        {address : 'B0', name : 'bawang putih'},
        {address : 'B2', name : 'bawang merah'},
        {address : 'A0', name : 'Ayam'},
        {address : 'A1', name : 'Sos'},
      ],
      name: 'Mee Goreng',
      serial: '1,5,5,10,80,5'
    },
    {
      cookingTime: 45,
      imageUrl: 'https://i.ytimg.com/vi/f7-VQ-326Xo/hqdefault.jpg',
      ingredients: [
        {address : 'B0', name : 'bawang putih'},
        {address : 'B2', name : 'bawang merah'},
        {address : 'A0', name : 'Ayam'},
        {address : 'A1', name : 'Sos'},
      ],
      name: 'Mee Hoon Goreng',
      serial: '1,15,15,10,80,5'
    },
  ];

  selectedPort : {device : string, description: string};

  constructor(private kitchenService: KitchenService,
              public dialog: MatDialog) {
    this.kitchenService.getAvailablePorts()
  }

  openDialog(item): void {
    const dialogRef = this.dialog.open(PortDialog, {
      width: '800px',
      data: item
    });

    dialogRef.afterClosed().subscribe((result : {
      port: {device : string, description: string},
      recipe : Recipe
    }) => {
      console.log(result)
      this.kitchenService.cook(result)
        .subscribe(data=>{
          console.log(data)
        })
    });
  }

}
