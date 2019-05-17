import {
  Component, OnInit
} from '@angular/core';
import { Ingredient, NewRecipe, Recipe } from './recipe.model';
import { KitchenService } from '../../../services/kitchen.service';
import { MatDialog } from '@angular/material';
import { PortDialog } from './port-dialog/port.dialog';
import { mergeMap } from 'rxjs-compat/operator/mergeMap';
import { interval, Subscription, timer } from 'rxjs';
import { RecipeDialog } from './recipe-dialog/recipe.dialog';

@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.styles.scss']
})
export class DashboardPage implements OnInit {

  recipes: NewRecipe[] = [];

  subscription: Subscription;
  source = interval(1500);

  constructor(private kitchenService: KitchenService,
              public dialog: MatDialog) {
    this.kitchenService.getAvailablePorts();
  }


  ngOnInit(): void {
    this.kitchenService.getRecipes()
      .subscribe(data=>{
        this.recipes = data.recipes
      })
  }

  openPortDialog(item): void {
    const dialogRef = this.dialog.open(PortDialog, {
      width: '800px',
      data: item
    });

    dialogRef.afterClosed().subscribe((result: {
      port: { device: string, description: string },
      recipe: NewRecipe
    }) => {
      console.log(result);
      if (result) {
        this.checkCookStatus(result);
        this.kitchenService.cook(result)
          .subscribe(data => {
            console.log(data);
          });
      }
    });
  }

  openRecipeDialog(): void {
    const dialogRef = this.dialog.open(RecipeDialog, {
      width: '800px',
      data: null
    });

    dialogRef.afterClosed().subscribe((result: NewRecipe) => {
      console.log(result);
      if (result) {

      }
    });
  }

  checkCookStatus(result: { port: { device: string, description: string }, recipe:  NewRecipe }) {
    let index = this.recipes.indexOf(result.recipe);
    this.subscription = this.source.subscribe(val =>
      this.ngOnInit()
    );
  }

  deleteReciepe(row : NewRecipe){
    this.kitchenService.deleteRecipe(row.id)
      .subscribe(data=>{
        console.log(data)
        this.ngOnInit()
        }
      )
  }


}
