import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from 'src/app/core/services/alertify.service';
import { ChangeLanguageService } from 'src/app/core/services/change-language.service';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { ProductsService } from 'src/app/services/api/products.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  isSubmited = false;
  actionName: any
  userForm!: FormGroup;
  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [];
  loading: boolean = true;

  constructor(
    private dialogRef: MatDialogRef<PostFormComponent>,
    public languageService: ChangeLanguageService,
    private productsService: ProductsService,
    @Inject(MAT_DIALOG_DATA) public data: Post,
    public translate: TranslateService,
    private fb: FormBuilder,
    private alertify: AlertifyService,
  ) {
  }
  ngOnInit() {
    this.lang = localStorage.getItem('lang')
    if (this.data != null) {
      this.actionName = this.translate.instant('Update')
      this.getDataInfo()
    } else {
      this.actionName = this.translate.instant('Create')
    }
    this.drowDataFilds();
  }


  usersList: any;
  drowDataFilds() {
    this.productsService.getAllUsers().subscribe((users: any) => {
      this.usersList = users ?.map((v: User) => ({ id: v ?.id, name: v ?.name }));

      this.fields = [
        {
          key: 'title',
          type: 'input',
          className: 'col-md-12 px-formly',
          templateOptions: {
            label: `${this.translate.instant('POSTS.title')} `,
            placeholder: this.translate.instant('POSTS.enterProductTitle'),
            required: true,
            maxLength: 200
          },
          validation: {
            messages: {
              required: (error, field: FormlyFieldConfig) => this.translate.instant('required'),
            },
          },
        },
        {
          key: 'body',
          type: 'textarea',
          className: 'col-md-12 px-formly',
          templateOptions: {
            label: `${this.translate.instant('POSTS.body')} `,
            placeholder: this.translate.instant('POSTS.enterbody'),
            required: true,
            rows: 5
          },
          validation: {
            messages: {
              required: (error, field: FormlyFieldConfig) => this.translate.instant('required'),
            },
          },
        },
        {
          key: 'userId',
          type: 'select',
          className: 'col-md-12 px-formly',
          templateOptions: {
            label: `${this.translate.instant('POSTS.user')} `,
            placeholder: this.translate.instant('POSTS.pleaseSelectUser'),
            required: true,
            valueProp: 'id',
            labelProp: 'name',
            options: this.usersList
          },
          validation: {
            messages: {
              required: (error, field: FormlyFieldConfig) => this.translate.instant('required'),
            },
          },
        }
      ];
    })
    this.loading = false;
    if (this.data != null) {

      this.model.title = this.data ?.title;
      this.model.body = this.data ?.body;
      this.model.userId = this.data ?.userId;
      this.model.id = this.data ?.id;
    }
  }
  disabelSubmit: boolean = false
  lang: any
  userData: any;
  getDataInfo() {
    this.form.patchValue({
      id: this.data ?.id,
      title: this.data ?.title,
      userId: this.data ?.userId,
      body: this.data ?.body
    });

  }

  onSubmit() {
    this.isSubmited = true
    let productData = {
      ...this.form.value
    }

    if (this.form.valid) {
      if (this.data != null && this.data.id) {
        productData.id = this.data.id;
        this.productsService.updateProduct(this.data.id, productData).subscribe((res) => {
          this.closeModal();
          if (res && res.id)
            this.alertify.success(this.translate.instant('post') + this.actionName + this.translate.instant('success'));
          else
            this.alertify.error(this.translate.instant('error'))
        }, (error) => {
          this.alertify.error(error.error.message || this.translate.instant('error'));
        })
      } else {
        this.productsService.createProduct(productData).subscribe((res) => {
          this.closeModal();
          if (res && res.id)
            this.alertify.success(this.translate.instant('post') + this.actionName + this.translate.instant('success'));
          else
            this.alertify.error(this.translate.instant('error'))
        }, (error) => {
          this.alertify.error(error.error.message || this.translate.instant('error'));
        })
      }
    }
  }
  onSelectValue(e: any) {
  }
  closeModal() {
    this.dialogRef.close(false);
  }
}
