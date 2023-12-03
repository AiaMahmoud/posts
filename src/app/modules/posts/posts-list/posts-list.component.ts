import { PostFormComponent } from './../post-form/post-form.component';
import { PostCardComponent } from './../post-card/post-card.component';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from 'src/app/core/services/alertify.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ChangeLanguageService } from 'src/app/core/services/change-language.service';
import { ProductsService } from 'src/app/services/api/products.service';
import { ConfirmMessageComponent } from 'src/app/shared/confirm-message/confirm-message.component';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],

})
export class PostsListComponent implements OnInit {
  params: any = {}
  page = 1
  size = 5
  loadingError = false
  loading = false
  oneEditModeOpen = false;
  headerDataList: any[] = []
  dataList: any[] = []
  displayColums: any[] = [
    'id', 'userId', 'title', 'body', 'actions'
  ]

  dataPaginationPerSize: any = [
    { value: 5 },
    { value: 20 },
    { value: 50 },
    { value: 100 },
    { value: 200 },
  ]
  totalCount!: number;
  totalPages!: number;
  arrTotalCount: number[] = [];
  constructor(
    private dialog: MatDialog,
    public languageService: ChangeLanguageService,
    private productsService: ProductsService,
    private alertify: AlertifyService,
    private auth: AuthenticationService,
    private translate: TranslateService,
    private cd: ChangeDetectorRef,
  ) {

  }
  allowCheckBox: boolean = false;
  donotHaveAccess: boolean = false;

  ngOnInit() {
    this.getPosts()
    this.loading = false
    this.loadingError = false
  }
  noDataMessageOn: boolean = false;

  getPosts() {
    this.loading = true;
    this.productsService.getPosts((this.page - 1) * this.size, this.size).subscribe((res: Array<Post>) => {
      if (res && res.length > 0) {
        this.dataList = res;
        this.displayedList = this.dataList;

        this.setPaginationData(this.dataList);
      } else {
        this.noDataMessageOn = true;
      }
      this.loading = false
      this.loadingError = false
    }, error => {
      this.loadingError = true;
      if (error.status == 401) {
        this.alertify.error(this.translate.instant('error'));
        this.auth.logOutCallHandling()
      } else {
        this.alertify.error(this.translate.instant('error'));
      }
    })
  }
  searchAction($event: any) {
    this.displayedList = [];
    if ($event.target.value && $event.target.value.length > 0) {
      this.dataList.forEach((element: any) => {
        if (
          element ?.id ?.toString().toLowerCase().includes($event.target.value.toLowerCase()) ||
            element ?.title ?.toLowerCase().includes($event.target.value.toLowerCase()) ||
              element ?.userId ?.toString().toLowerCase().includes($event.target.value.toLowerCase()) ||
                element ?.body ?.toLowerCase().includes($event.target.value.toLowerCase())) {
          this.displayedList.push(element);
          this.cd.detectChanges();
        }
      });
    } else {
      this.displayedList = this.dataList;
    }
    this.cd.detectChanges();

    this.setPaginationData(this.displayedList);
  }
  displayedList: any = [];

  setPaginationData(dataList: any) {
    let originalSize = 100;
    let fromSize = (this.page - 1) * this.size;
    // this.displayedList = dataList.slice(fromSize, (fromSize + this.size));
    const pages = originalSize / (this.size);
    this.arrTotalCount = [];
    for (let i = 0; i < pages; i++) {
      this.arrTotalCount.push(i + 1);
    }
  }

  selectedAgant: any;
  addNew() {
    var options = {
      width: '70%',
      height: '90%',
      position: {},
      backdropClass: 'backdropBackground',
    };
    let lang = localStorage.getItem('lang');

    if (lang == 'ar') {
      options.position = { left: '15%', top: '30px' };
    } else {
      options.position = { right: '15%', top: '30px' };
    }
    const dialogRef = this.dialog.open(PostFormComponent, options)
  }
  updateIndex(pageIndex: number) {
    this.page = pageIndex;
    // this.setPaginationData(this.dataList);
    this.getPosts();
  }

  openPostDetails(e: any) {
    let lang = localStorage.getItem('lang');
    var options = {
      width: '70%',
      height: '90%',
      position: {},
      backdropClass: 'backdropBackground',
      data: e
    };
    if (lang == 'ar') {
      options.position = { left: '15%', top: '30px' };
    } else {
      options.position = { right: '15%', top: '30px' };
    }
    const dialogRef = this.dialog.open(PostCardComponent,
      options)
    dialogRef.afterClosed().subscribe((data: any) => {
      this.getPosts()
    })
  }
  closeSimpleModeEditeDataModel(e: any) {
    let lang = localStorage.getItem('lang');
    var options = {
      width: '70%',
      height: '90%',
      position: {},
      backdropClass: 'backdropBackground',
      data: e
    };
    if (lang == 'ar') {
      options.position = { left: '15%', top: '30px' };
    } else {
      options.position = { right: '15%', top: '30px' };
    }
    const dialogRef = this.dialog.open(PostFormComponent,
      options)
    dialogRef.afterClosed().subscribe((data: any) => {
      this.getPosts()
    })

  }
  closeSimpleModeSave(e: any) {
  }
  closeSimpleModeDelete(e: any) {
    const dialogRef = this.dialog.open(ConfirmMessageComponent, {
      width: '50%',
      height: '75%',
      position: { right: '25%', top: '5%' },
      backdropClass: 'backdropBackground',
      data: { action: 'POSTS.DeleteProduct', message: 'User' }
    })
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        this.productsService.deleteProduct(e ?.id).subscribe((res) => {
          this.getPosts()
          this.alertify.success(this.translate.instant("deletedDone"));
        }, (error) => {
          this.alertify.error(error.error.message || this.translate.instant('error'));
        })
      }
    });
  }
  addForm() {
    const dialogRef = this.dialog.open(PostFormComponent, {
      width: '800px',
      height: '90%',
    })
    dialogRef.afterClosed().subscribe((data: any) => {
      this.getPosts()
    })
  }
  handleChangePageSize(event: any) {
    this.size = event.target.value;
    this.page = 1
    this.getPosts()
  }


}


