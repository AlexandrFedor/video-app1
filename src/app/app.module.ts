import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { SearchDetailComponent } from './components/search-detail/search-detail.component';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchErrorComponent } from './components/search-error/search-error.component';
import { HttpClientModule} from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { SearchItemComponent } from './components/search-item/search-item.component'
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SearchDetailComponent,
    SearchCardComponent,
    SearchResultsComponent,
    SearchErrorComponent,
    ModalComponent,
    SearchItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
