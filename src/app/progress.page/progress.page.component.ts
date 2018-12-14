import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AssetCreatorDialog } from '../dashboard/asset-creator.dialog';
import { MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from '../../services/asset.service';
import { ProgressDialogComponent } from './progress.dialog/progress.dialog.component';

@Component({
  selector: 'app-progress.page',
  templateUrl: './progress.page.component.html',
  styleUrls: ['./progress.page.component.scss']
})
export class ProgressPage implements OnInit {

  constructor(private assetService: AssetService,
              private router: Router,
              private route: ActivatedRoute,
              private vcf: ViewContainerRef,
              private dialog: MatDialog,
              private snackBar : MatSnackBar) { }

  items : number[] = [0];
  rows : number  =this.items.length/5;
  span : number = 1;
  creatorDialogRef: MatDialogRef<ProgressDialogComponent>;

  ngOnInit() {

  }

  showAddDialog(): void {
    console.log('showContainerDialog');
    let config: MatDialogConfig = new MatDialogConfig();
    config.viewContainerRef = this.vcf;
    config.role = 'dialog';
    config.width = '60%';
    config.height = '80%';
    config.position = {top: '0px'};
    this.creatorDialogRef = this.dialog.open(ProgressDialogComponent, config);
    this.creatorDialogRef.afterClosed().subscribe((res) => {
      console.log('close dialog');

    });
  }


}
