import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { IflashCard, examplewords } from './flashCard.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlashCardsService {
  
  private flashcardSubject: BehaviorSubject<IflashCard[]> = new BehaviorSubject<IflashCard[]>([]);
  public readonly flashCard$: Observable<IflashCard[]> = this.flashcardSubject.asObservable();

  
 
  constructor(private http: HttpClient) {
    this.loadTodos();
  }

  private loadTodos(): void {
    this.http.get<{ FlashCards: IflashCard[] }>('/api/getAllFlashCards').subscribe(response => {
      this.flashcardSubject.next(response.FlashCards);
    });
  }

  
//Adding Flash card
addFlashCard(word: string, definition: string) {
  console.log(`New todo description = ${definition}`);

  this.http.post('api/addFlashCard',
  {word, definition, learned: false}).subscribe((response: any) => {
    console.log(response);

    this.loadTodos();
  });
}

  
//Deleting Flash Card
  deleteTheFlashCard(_id: string) {
    this.http.post('api/deleteFlashCard', {_id }).subscribe((response: any) => {
      console.log(response);
      this.loadTodos();
    });
  }



  updateFlashCard(updatedFlashCard: IflashCard): void {
    this.http.post('/api/updateFlashCard', updatedFlashCard).subscribe(response => {
      
      console.log(response);
      
      const updatedCard = this.flashcardSubject.getValue().map(flashCard => {
        
        if (flashCard._id === updatedFlashCard._id) {
          return updatedFlashCard;
        } else {
          return flashCard;
        }
      });
      this.flashcardSubject.next(updatedCard);
      this.loadTodos();
    });
  }
  //Getting Flash Card by Id
  getFlashCardById(id: string): Observable<IflashCard | any> {
    return this.flashCard$.pipe(
      map(flashCards => flashCards.find(card => card._id === id))
    );
  }

//Getting words Learned flash Cards
  getLearnedFlashCards(): Observable<IflashCard[]> {
    return this.flashCard$.pipe(
      map(flashCards => 
        flashCards.filter(card => card.learned === true))
    );
  }
//Getting Words to Learn flash Cards
  getWordsToLearnCards(): Observable<IflashCard[]> {
    return this.flashCard$.pipe(
      map(flashCards => 
        flashCards.filter(WordsToLearnCards => WordsToLearnCards.learned === false)
      )

    );
  }


}
