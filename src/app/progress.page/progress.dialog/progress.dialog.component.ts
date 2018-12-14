import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssetStatus } from '../../dashboard/asset-status.enum';
import { AssetCategory } from '../../dashboard/asset-category.enum';
import { Asset } from '../../dashboard/asset.interface';
import { TdTextEditorComponent } from '@covalent/text-editor';

@Component({
  selector: 'app-progress.dialog',
  templateUrl: './progress.dialog.component.html',
  styleUrls: ['./progress.dialog.component.scss']
})
export class ProgressDialogComponent implements OnInit {

  editorForm: FormGroup;

  @ViewChild('textEditor') private _textEditor: TdTextEditorComponent;

  options: any = {
    lineWrapping: true,
  };


  constructor(private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar,
              private formBuilder: FormBuilder,
              private dialog: MatDialogRef<ProgressDialogComponent>) { }


  ngOnInit(): void {
    this.editorForm = this.formBuilder.group({
      date: ['', Validators.required],
      entry: ['', [(Validators.required)]],
    });
  }


  save(asset: Asset): void {
    console.log(JSON.stringify(asset));
    this.dialog.close();
  }


}
