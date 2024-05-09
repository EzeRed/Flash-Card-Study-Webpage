import { Component, OnInit } from '@angular/core';
import { IflashCard } from '../flashCard.model';
import { FlashCardsService } from '../flash-cards.service';

@Component({
  selector: 'app-words-learned',
  templateUrl: './words-learned.component.html',
  styleUrls: ['./words-learned.component.css']
})
export class WordsLearnedComponent  {


  allflashCards: IflashCard[];
 

  //get only Words Learned flash cards
  constructor(private flashCardService: FlashCardsService) {
    this.flashCardService.getLearnedFlashCards().subscribe(learnedFlashCards => {
      this.allflashCards = learnedFlashCards;
    })
  }
  

  
    
  
}
