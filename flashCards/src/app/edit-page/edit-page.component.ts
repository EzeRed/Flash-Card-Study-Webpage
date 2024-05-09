import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IflashCard } from '../flashCard.model';
import { FlashCardsService } from '../flash-cards.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  //geting a selected flash card info
  editedFlashCard: IflashCard = {
    _id: '',
    word: '',
    definition: '',
    learned: false};

  added: boolean = false;



  constructor(
    private route: ActivatedRoute,
    private flashCardService: FlashCardsService
  ) { }

  
  radioCatagory: boolean;
  editFlashCardForm = new FormGroup({
    word: new FormControl('', [Validators.required, Validators.minLength(1)]),
    definition: new FormControl('', [Validators.required, Validators.minLength(1)]),
    radioCatagory: new FormControl('false', Validators.required)
  });


  ngOnInit(): void {

    // Get ID 
    const flashCardId: any  = this.route.snapshot.paramMap.get('id');

    // Get flashcard details using the ID

    this.flashCardService.getFlashCardById(flashCardId).subscribe(flashCard => {
      this.editedFlashCard = flashCard;

      //adding info the form
      this.editFlashCardForm.patchValue({
      word: flashCard.word,
      definition: flashCard.definition,
      radioCatagory: flashCard.learned.toString()
    })  
    });
  }

    //submit the edited flashcard
  submitEdit(): void {
    if(this.editFlashCardForm.valid) {
      //switching flash card catagory
      if (this.editFlashCardForm.value.radioCatagory == 'false' ) {
      this.editedFlashCard.learned = false;
    } else {
      this.editedFlashCard.learned = true;
    }

      const updatedFlashCard: any = {
        
          _id: this.editedFlashCard._id,
          word: this.editFlashCardForm.value.word,
          definition: this.editFlashCardForm.value.definition,
          learned: this.editedFlashCard.learned
        };
        this.added = true;
        this.flashCardService.updateFlashCard(updatedFlashCard);
      }
      
    }
    
    // Optionally, navigate back to the update page or another page after editing
  }
  
  
 

    

  




