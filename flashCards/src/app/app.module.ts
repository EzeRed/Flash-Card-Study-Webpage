import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { UpdateFlashCardComponent } from './update-flash-card/update-flash-card.component';
import { CreateFlashCardComponent } from './create-flash-card/create-flash-card.component';


import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { DisplayFlashCardComponent } from './display-flash-card/display-flash-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FlashCardsService } from './flash-cards.service';
import { WordsLearnedComponent } from './words-learned/words-learned.component';
import { CatagoriesComponent } from './catagories/catagories.component';
import { EditPageComponent } from './edit-page/edit-page.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    UpdateFlashCardComponent,
    CreateFlashCardComponent,
    DisplayFlashCardComponent,
    WordsLearnedComponent,
    CatagoriesComponent,
    EditPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule, 
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule,
    NgFor,
    NgIf,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule

  
  ],
  providers: [FlashCardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
