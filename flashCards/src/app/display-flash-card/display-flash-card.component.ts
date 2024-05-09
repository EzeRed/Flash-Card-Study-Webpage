import { Component, Input, OnInit } from '@angular/core';
import { IflashCard } from '../flashCard.model';

@Component({
  selector: 'app-display-flash-card',
  templateUrl: './display-flash-card.component.html',
  styleUrls: ['./display-flash-card.component.css']
})
export class DisplayFlashCardComponent  {


  constructor() { }

 

  @Input() displayCard!: IflashCard;

  showDefinition: Boolean = false

    //switching word and definition
   swtchDefinition() {
    this.showDefinition = !this.showDefinition;
    
   }
}
