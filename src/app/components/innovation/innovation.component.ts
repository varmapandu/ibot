import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-innovation',
  templateUrl: './innovation.component.html',
  styleUrls: ['./innovation.component.scss']
})
export class InnovationComponent implements OnInit {

  constructor() { }
  courseData={ 
    name: "Blockchain ", 
    projects:[
      { 
        name : "Creation of Blockchain wallet", 
        description : "This application enables the creation of wallet based on Blockchain technology that can store Cryptocurrency using APIs.It enables transactions between wallets using Cryptocurrency.", 
        image : "assets/images/courses/blockchaincourse/blockchain-wallet.png", 
        imageAlt : "blockchaincourse", 
    },
    {
      name: "Voting application in Private Blockchain",
      description:"This application enables the creation of voting application based on Private Blockchain.It can track the number of votes polled for each contestant in an eletion.",
      image: "assets/images/courses/blockchaincourse/blockchain-wallet.png",
      imageAlt:"Blockchain ",
    }
    ]
  }
  ngOnInit() {
  }
  
}
