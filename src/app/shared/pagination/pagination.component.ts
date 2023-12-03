import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChangeLanguageService } from 'src/app/core/services/change-language.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  start:any= 0
  end: any = 1
  curent: any = 1
  @Input() totalItem: number = 0;
  @Input() totalpages: number = 1;
  pages = []
  @Input() arrayPagination: number[] = [];
  @Input() pageNumber: number = 1;

  @Output('change') change = new EventEmitter();
  constructor( public languageService: ChangeLanguageService,) { }
  ngOnInit(): void {
    this.calculatePages()

  }
  calculatePages() {
    if (this.curent == 1) {
      this.start = 1
      this.end = this.curent + 4
    } else if (this.curent == 2) {
      this.start = this.curent - 1
      this.end = this.curent + 3
    } else {
      this.start = this.curent - 2
      this.end = this.curent + 2
    }

    if (this.curent == this.arrayPagination.length) {
      this.end = this.arrayPagination.length
      this.start = this.curent - 4
    }
    if (this.arrayPagination.length == 1) {
      this.end = 0
      this.start = 0
    }
  }

  changeIndex(indexNumber: number) {
    if(this.arrayPagination.length == 1){
     this.pageNumber= 1
     this.curent = 1
    }
    this.pageNumber = indexNumber
    this.change.emit(indexNumber);


    //console.log( this.pageNumber);
    //console.log(this.arrayPagination.length); //totalpage
    //console.log(this.totalItem);
    //console.log(this.arrayPagination);




  }

  pageChanged(page: any){
   this.start = page
   if(this.start + 4 < this.arrayPagination.length){
     this.end = this.start + 4
   }

   this.changeIndex(page)
  }

  previousPage() {
    if (this.pageNumber === 1)
      return;

      this.pageNumber--;
      this.curent= this.pageNumber
    this.changeIndex(this.pageNumber);
  }

  nextPage() {
    if(this.arrayPagination.length == 1){
      this.pageNumber= 1
     }
    if (this.pageNumber === this.arrayPagination.length)
      return;
    this.pageNumber++;
    this.curent= this.pageNumber
    this.changeIndex(this.pageNumber);
  }

}
