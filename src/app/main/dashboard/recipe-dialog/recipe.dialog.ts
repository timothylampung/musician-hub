import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { KitchenService } from '../../../../services/kitchen.service';
import { Recipe } from '../recipe.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'vol-recipe-dialog',
  templateUrl: './recipe.dialog.html',
  styleUrls: ['./recipe.dialog.scss']
})
export class RecipeDialog implements OnInit {

  showProgressDialog = false;
  mainForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<RecipeDialog>,
              private fb: FormBuilder,
              private kitchenService: KitchenService) {
  }

  ngOnInit(): void {
    this.mainForm = this.fb.group({
        cookingDur: [0],
        cookingTemp: [0],
        functionSelected: [0],
        imageUrl: [''],
        name: [''],
        oilPumpDur: [0],
        preHeatDur: [0],
        status: [''],
        waterPumpDur: [0]
      }
    );
  }


  submit() {
    this.showProgressDialog = true;
    this.kitchenService.saveRecipes(this.mainForm.value)
      .subscribe(data => {
        console.log(data);
        this.showProgressDialog = false;
        this.dialogRef.close();
      });
  }

}
