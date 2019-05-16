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
  showProgressDialog = false;

  constructor( public dialogRef: MatDialogRef<PortDialog>,
               private kitchenService: KitchenService,
               @Inject(MAT_DIALOG_DATA) public recipe: Recipe){
  }

  ngOnInit(): void {

    if(!localStorage.getItem('ports')){
      this.cachePorts()
    }

    this.ports = JSON.parse(localStorage.getItem('ports'))
  }

  cachePorts(){
    this.ports = null;
    this.showProgressDialog = true;
    this.kitchenService.getAvailablePorts()
      .subscribe((data : {ports : [{device : string, description: string}]})=>{
        console.log(data);
        this.showProgressDialog = data == undefined;
        localStorage.setItem('ports', JSON.stringify(data))
        this.ports = JSON.parse(localStorage.getItem('ports'))
      })
  }

  onNoClick(data): void {
    this.dialogRef.close({port : data, recipe : this.recipe});
  }

}
