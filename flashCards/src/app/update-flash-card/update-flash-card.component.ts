import { Component, Output } from '@angular/core';
import { FlashCardsService } from '../flash-cards.service';
import { IflashCard } from '../flashCard.model';

@Component({
  selector: 'app-update-flash-card',
  templateUrl: './update-flash-card.component.html',
  styleUrls: ['./update-flash-card.component.css']
})
export class UpdateFlashCardComponent {

  allflashCards: IflashCard[];
  

  //get all flash cards
  constructor(private flashCardService: FlashCardsService) {
  this.flashCardService.flashCard$.subscribe(flashCard => {
    this.allflashCards = flashCard;
  });
}

//delete falsh card
deleteFlashCard(flashCardId: string) : void {
  
      this.flashCardService.deleteTheFlashCard(flashCardId);
  
}

}
