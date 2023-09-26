import { Component, Input, OnInit } from '@angular/core';
import { IMovies } from 'src/app/models/movie';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit{

@Input() movies: IMovies[] = []


constructor (public modalService: ModalService) {

}

ngOnInit(): void {
    
}

}
