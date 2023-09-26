import { Component, Input, OnInit } from '@angular/core';
import { IMovies } from 'src/app/models/movie';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit{

    @Input() movies: IMovies[] = []


    constructor (public modalService: ModalService) {

    }
    
    ngOnInit(): void {
        
    }

}
