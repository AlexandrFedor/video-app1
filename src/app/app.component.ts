import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from './services/http.service';
import { Subscription } from 'rxjs';
import {
  switchMap,
  distinctUntilChanged,
  debounceTime,
  map,
  filter,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'video-app';
  cardArr = Array(6);
  keyupSub!: Subscription;
  searchResults:any[] = [];
  notFound = false;
  isLoading = false;
  searchString: string = '';

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.keyupSub = this.httpService.keyupSubject
      .pipe(
        map((e: any) => e.target.value),
        filter(Boolean),
        debounceTime(500),
        distinctUntilChanged(),
        tap((str) => {
         this.searchResults = [];
          this.isLoading = true;
          this.searchResults = str;
        }),
        switchMap((search) => this.httpService.getMovies(search))
      )
      .subscribe({
        next: (responce: any) => {
          console.log(responce);
            this.notFound = false
          if (responce?.Search.length) {
            this.searchResults = responce.Search;
          }
          else {
            this.notFound = true
          }
          this.isLoading = false
        },
        error: (err) => {
            this.isLoading = false 
            console.log(err)
        }
      });
  }

  ngOnDestroy(): void {
    if (this.keyupSub) this.keyupSub.unsubscribe();
  }
}
