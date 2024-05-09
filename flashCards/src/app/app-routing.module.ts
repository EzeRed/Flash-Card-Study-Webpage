import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UpdateFlashCardComponent } from './update-flash-card/update-flash-card.component';
import { CreateFlashCardComponent } from './create-flash-card/create-flash-card.component';
import { WordsLearnedComponent } from './words-learned/words-learned.component';
import { EditPageComponent } from './edit-page/edit-page.component';

const routes: Routes = [

  {'path': 'home', 'title': 'Home', component: HomeComponent},
  {'path': 'update', 'title': 'Update Flash Card', component: UpdateFlashCardComponent},
  {'path': 'create', 'title': 'Create Flash Card', component: CreateFlashCardComponent},
  {'path': 'wordsLearned', 'title': 'Words Learned', component: WordsLearnedComponent},
  {'path': 'update/edit/:id','title': 'Details', component: EditPageComponent},
  {'path': '', redirectTo: 'home', pathMatch: 'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
