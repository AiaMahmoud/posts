import { ProductsService } from 'src/app/services/api/products.service';
import { Post } from './../../../models/post';
import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from 'src/app/core/services/alertify.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ChangeLanguageService } from 'src/app/core/services/change-language.service';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],

})
export class PostCardComponent implements OnInit {
  starRating: number = 0;
  gfg = 5;
  constructor(
    private dialog: MatDialog,
    public languageService: ChangeLanguageService,
    private PostsService: ProductsService,
    @Inject(MAT_DIALOG_DATA) public postData: Post,

  ) {
  }
  allowCheckBox: boolean = false;
  donotHaveAccess: boolean = false;
  selectedValue: any;
  commentsList: any = [];
  stars = [1, 2, 3, 4, 5]
  countStar(star: any) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }
  ngOnInit() {
    console.log('postData :::: ', this.postData);
    if (this.postData) {
      this.PostsService.getPostComments(this.postData.id).subscribe((res: Post) => {
        console.log('RES :: ', res);
        this.commentsList = res;
      })
    }
  }

  noDataMessageOn: boolean = false;
}


