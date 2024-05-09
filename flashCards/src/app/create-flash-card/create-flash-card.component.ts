import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FlashCardsService } from '../flash-cards.service';
import { IflashCard } from '../flashCard.model';




@Component({
  selector: 'app-create-flash-card',
  templateUrl: './create-flash-card.component.html',
  styleUrls: ['./create-flash-card.component.css']
})




export class CreateFlashCardComponent {

  
  


  added: boolean = false;

  //form 
  flashCardForm = new FormGroup({
    word: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),
    definition:  new FormControl('', [Validators.required, Validators.minLength(1)])
   
  });
  


  constructor(private flashCardService: FlashCardsService) {}


  //adding new Flash Card
  submitButton() {
    if (this.flashCardForm.valid) {
      const newFlashCard: any = {
        word: this.flashCardForm.value.word,
        definition: this.flashCardForm.value.definition,
      };

      // Add new flashcard 
      this.flashCardService.addFlashCard(newFlashCard.word, newFlashCard.definition);

      // Reset the form 
      this.added = true;
      this.flashCardForm.reset();
    }
  }

}
