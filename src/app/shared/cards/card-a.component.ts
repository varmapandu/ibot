import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChange
} from "@angular/core";
import {Props} from './../../apex/common/props'
@Component({
  selector: "card-a",
  template: `
        <div class="card-wrapper">
        <div class="row">
            <ng-template ngFor let-icard [ngForOf]="cardList" let-i="index">
                <div class="card-el col-md-4"> 
                    <div class="img-box">
                        <div class="oval Aligner">
                            <img [alt]="icard.imageAlt" src="{{icard.image}}" height="100px" class="img-responsive card-image margin-auto"/>
                        </div>
                        <div class="carda wow slideInLeft Aligner">
                          <div class="Aligner-item" style="color:white;">
                            <h4 style="line-height:30px !important;">{{icard.name}}</h4>
                            <p>{{icard.description}}</p>
                          </div>
                        </div>
                    
                    </div>
                </div>
            </ng-template>
            </div>
        </div>
 `,
  styles: [
    `
        .card-wrapper{
        width: 100%;
        margin-left:10px;
        }
        h3{
          line-height:30px !important;
        }
        .card-image{
          width:50%;
        }
        
        
        .card-el{
        text-align: center;
        height: 190px;
        margin: 8px;
        width:31%;
      
        }
        .img-box {
        width: 100%;
        height: auto;
        overflow: unset;
        background: transparent;
        position: sticky;
        }
        .carda{
        left:50px;
        position: absolute;
        height: 180px;
        border-radius: 10px;
        background-color: #000;
        box-shadow: 0 2px 10px 0 rgba(194, 194, 194, 0.5);
        padding: 0px 10px 0px 60px;
        text-align:left;
        min-width:300px;
        }
        .oval {
        width: 100px;
        height: 100px;
        border-radius: 100px;
        background-color: #ffffff;
        box-shadow: 0 2px 10px 0 rgba(194, 194, 194, 0.5);
        position: absolute;
        z-index: 1;
        top: 25px;
   
        }
        @media only screen and (min-width: 320px) and (max-width: 500px) {
          .oval{
            display:none;
          }
          .carda{
            left:-55px;
            width:280px;
          }

        }
      
 `
  ]
})
export class CardAComponent {
  public imageHost = Props.IMAGE_HOST;
  @Output() outputEvent: EventEmitter<any> = new EventEmitter<any>();

  @Input() inputData: any;
  cardList:any;
  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    if (changes.hasOwnProperty("inputData")) {
      this.cardList = JSON.parse(JSON.stringify(this.inputData));
      if (this.cardList) {
        this.doService(this.cardList);
      }
    }
  }
  doService(cardList: any[]) {
    this.cardList = cardList;
  }
}
