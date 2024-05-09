import { Component, OnInit } from '@angular/core';
import { IflashCard } from '../flashCard.model';
import { FlashCardsService } from '../flash-cards.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allflashCards: IflashCard[] = [];


  //get flash cards
  constructor(private flashCardService: FlashCardsService) {
    this.flashCardService.getWordsToLearnCards().subscribe(flashCards => {
      this.allflashCards = flashCards;
    });
  }
  

  
   
  

 
  

  
}
