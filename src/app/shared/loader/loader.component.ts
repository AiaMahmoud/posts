import { Component, OnInit, Injectable, Input, Output, EventEmitter } from '@angular/core';

@Injectable()

@Component({
  selector: '[component-loader]',
  template: `
        <div class="loading-component" *ngIf="componentLoading && !componentError" >
            <div class="text-center" >
                <div class="maly-line-loader">
                    <div class="loading-bar">

                    <div id="loader">
                    <div class="feeder">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
            <div class="loading"></div>
               </div>


                    </div>
                </div>

            </div>
        </div>
        <div class="ptb-4 flex flex-center width-100 plr-4" *ngIf="componentError">
            <div class="text-center">
                <p class="text-line text-error pointer" (click)="errorMessageClick()">
                    <i class="fa fa-refresh size-lead" aria-hidden="true"></i>
                    <br />
                    <span class="text-underlined">{{errorMessage}}</span>
                </p>
            </div>
        </div>
        <div [hidden]="componentLoading || componentError">
            <ng-content></ng-content>
        </div>
    `,
  styles: [`

 /* Absolute Center Spinner */
 .navbar, .sidebar{
  z-index:0 !important;
 }

.loading {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: visible;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

/* Transparent Overlay */
.loading:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
}

#circle div {
  animation: spin linear infinite;
  position: absolute;
  box-sizing: border-box;
  border-radius: 50%;
  border: 4px transparent solid;
  border-color: blue transparent;
}

#circle div:nth-child(1) {
  top: 0px;
  left: 0px;
  width: 70px;
  height: 70px;
  animation-duration: (20s/ 5);
}

#circle div:nth-child(2) {
  top: 6px;
  left: 6px;
  width: 58px;
  height: 58px;
  animation-duration: (20s/ 8);
}

#circle div:nth-child(3) {
  top: 11px;
  left: 11px;
  width: 48px;
  height: 48px;
  animation-duration: (20s/ 11);
}

#circle div:nth-child(4) {
  top: 16px;
  left: 16px;
  width: 38px;
  height: 38px;
  animation-duration: (20s/ 14);
}

#circle div:nth-child(5) {
  top: 20px;
  left: 20px;
  width: 30px;
  height: 30px;
  animation-duration: (20s/ 17);
}

#circle div:nth-child(6) {
  top: 24px;
  left: 24px;
  width: 22px;
  height: 22px;
  animation-duration: (20s/ 20);
}

#circle div:nth-child(7) {
  top: 27px;
  left: 27px;
  width: 16px;
  height: 16px;
  animation-duration: (20s/ 23);
}

#circle div:nth-child(8) {
  top: 30px;
  left: 30px;
  border: 10px;
  animation-duration: (20s/ 26);
}

#circle {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  width: 70px;
  height: 70px;
  box-sizing: border-box;
}

@keyframes spin {
  0% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(315deg);
  }
  0%,
  100% {
    border-color: #010145 transparent;
  }
  30.902%,
  69.098% {
    border-color: #3C3CE4 transparent;
  }
  50% {
    border-color: #A1A1E4 transparent;
  }
}
    `]
})

export class LoaderComponent implements OnInit {

  @Input() loadingMessage = '';
  @Input() componentLoading: boolean = true;
  @Input() componentError: boolean = false;
  @Input() errorMessage: string = '';
  @Output() errorCallback = new EventEmitter;

  constructor(

  ) { }
  ngOnInit() {

  }
  errorMessageClick() {
    this.errorCallback.emit();
  }
}

