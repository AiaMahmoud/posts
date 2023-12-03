import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from 'src/app/core/services/alertify.service';
import { ChangeLanguageService } from 'src/app/core/services/change-language.service';

@Component({
  selector: 'app-basic-tabel',
  templateUrl: './basic-tabel.component.html',
  styleUrls: ['./basic-tabel.component.scss']
})
export class BasicTabelComponent implements OnInit {

  @Input() dataList: any
  @Input() headerDataList: any
  @Input() displayColums: any
  @Input() paginationConfig: any
  @Input() labelTabel: any
  @Output('closeSimpleModeSave') closeSimpleModeSaveData = new EventEmitter();
  @Output('closeSimpleModeDelete') closeSimpleModeDeleteData = new EventEmitter()

  @Output('closeSimpleModeEdite') closeSimpleModeEditeData = new EventEmitter()
  @Output('closeSimpleCallReply') closeSimpleCallReply = new EventEmitter();
  @Output('showItemHeader') showItemHeader = new EventEmitter();

  @Output('addCaseData') addCaseData = new EventEmitter()

  @Output('clickToDetailsData') clickToDetailsData = new EventEmitter()
  @Output('addTargetData') addTargetData = new EventEmitter()
  @Output('onchange') onchangeData = new EventEmitter()
  @Output('assigneLeadData') assigneLeadData = new EventEmitter()
  @Output('assigneLeads') assigneLeads = new EventEmitter();
  @Output('handleToogle') handleToogle = new EventEmitter();
  @Input() typeOfRouting: any = null  //undefined
  oneEditModeOpen = false;
  openAddRow: boolean = false;
  permissions: any;
  isExceed: boolean = false;
  counter: number = 0;
  constructor(
    public languageService: ChangeLanguageService,
    public translate: TranslateService,
    private alertify: AlertifyService,
  ) {
  }
  changed(userData: any, $event: any) {
    //console.log('USERDATA event: ', $event.checked);
    this.handleToogle.emit({ userId: userData?.id, status: $event.checked })
    userData.active = !userData.active;
  }
  onchange(userData: any, $event: any, index: any) {
    this.onchangeData.emit({
      userId: userData.id, status: $event.target.checked, index: (index + 1),
      isExceed: this.isExceed
    })

    console.log($event.target.checked);

  }


  closeSimpleMode(userId: number, userIndex: number) {
    this.dataList[userIndex].displayStyle = true;
    this.oneEditModeOpen = false;
  }
  closeSimpleModeSave(userId: number, userIndex: number) {
    this.dataList[userIndex].displayStyle = true;
    this.oneEditModeOpen = false;
    this.closeSimpleModeSaveData.emit(userId)
  }
  closeSimpleModeDelete(userId: number, userIndex: number) {
    this.closeSimpleModeDeleteData.emit(userId)
  }
  showItemHeaderItemSelct(head: any, idex: any) {
    this.showItemHeader.emit({ label: this.labelTabel, head: head })
  }

  closeAddInlineForm() {
    this.openAddRow = false;
    this.oneEditModeOpen = false;
  }
  goToReport(reportUrl: any) {
    window.open(reportUrl, "_blank");
  }
  userData: any;
  ngOnInit(): void {
  }

  resendFile(fileData: any) {
    this.closeSimpleModeEditeData.emit(fileData)
  
  }
  clickSimpleCallReply(data:any){
    this.closeSimpleCallReply.emit(data);
  }
  activeCall: boolean = false
  activeCallId: any
  chooseModelCall(id: any) {
    this.activeCallId = id
    this.activeCall = true
  }

  addCase(userId: number, userIndex: number, data: any) {
    this.addCaseData.emit({ userId: userId, data: data })
  }

  assigneLeadCall(userId: number, userIndex: number, data: any) {
    //console.log('dataaaaaaaaa : ', data);
    this.assigneLeadData.emit({ userId: userId, data: data })
  }
  addTarget(userId: number, userIndex: number, data: any) {
    this.addTargetData.emit({ userId: userId, data: data })
  }

  clickToEmitDetails(userId: number, userIndex: number) {
    //console.log('userId ',userId, 'userIndex ',userIndex);
    if (userId) {
      this.clickToDetailsData.emit(userId);
    } else {
      this.clickToDetailsData.emit(userIndex);
    }
  }
  openSimpleModeEdite(userId: number, userIndex: number, data: any) {
    // if(!this.oneEditModeOpen){
    // this.dataList[userIndex].displayStyle=false;
    // this.oneEditModeOpen=true;
    // }
    this.closeSimpleModeEditeData.emit({ userId: userId, data: data })
  }

}
