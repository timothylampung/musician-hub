import {
   Component,  OnDestroy, OnInit,
  ViewContainerRef
} from '@angular/core';
import {Asset} from './asset.interface';
import {Observable} from 'rxjs/Observable';
import {AssetService} from '../../services/asset.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar} from '@angular/material';
import {AssetCreatorDialog} from './asset-creator.dialog';

@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.page.html',
})
export class DashboardPage implements OnInit, OnDestroy {


  dateStart : Date = new Date("1/2/2012")
  dateEnd : Date = new Date("1/8/2012")

  assets$: Observable<Asset[]>;
  creatorDialogRef: MatDialogRef<AssetCreatorDialog>;

  // constructor
  constructor(private assetService: AssetService,
              private router: Router,
              private route: ActivatedRoute,
              private vcf: ViewContainerRef,
              private dialog: MatDialog,
              private snackBar : MatSnackBar ) {
    console.log('constructor');
  }


  loadPosts(): void {
    this.assets$ = this.assetService.findAssets();
  }


  ngOnInit(): void {
    console.log('init');
    this.loadPosts();
  }

  ngOnDestroy(): void {
    // no op
  }

  showAddDialog(): void {
    console.log('showContainerDialog');
    let config: MatDialogConfig = new MatDialogConfig();
    config.viewContainerRef = this.vcf;
    config.role = 'dialog';
    config.width = '70%';
    config.height = '60%';
    config.position = {top: '0px'};
    this.creatorDialogRef = this.dialog.open(AssetCreatorDialog, config);
    this.creatorDialogRef.afterClosed().subscribe((res) => {
      this.loadSnackBar();
      console.log('close dialog');

    });
  }
  loadSnackBar():void{
    console.log('Snack Bar  loaded');
    this.snackBar.open('I am loaded','',{duration : 5000})
  }

}
