import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { KitchenService } from '../../../../services/kitchen.service';
import { Recipe } from '../recipe.model';

@Component({
  selector : 'vol-port-dialog',
  templateUrl : './port.dialog.html',
  styleUrls : ['./port.dialog.scss']
})
export class PortDialog implements OnInit{

  ports : {ports : [{device : string, description: string}]} ;
  showProgressDialog = true;

  constructor( public dialogRef: MatDialogRef<PortDialog>,
               private kitchenService: KitchenService,
               @Inject(MAT_DIALOG_DATA) public recipe: Recipe){
  }

  ngOnInit(): void {
    this.kitchenService.getAvailablePorts()
      .subscribe((data : {ports : [{device : string, description: string}]})=>{
        console.log(data);
        this.showProgressDialog = data == undefined;
        this.ports = data
      })
  }

  onNoClick(data): void {
    this.dialogRef.close({port : data, recipe : this.recipe});
  }

}
