import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBookId } from '../../models/book.model';

@Component({
  selector: 'hippo-book',
  templateUrl: './book.component.html',
  styleUrls: ['../../styles/css/book.component.css']
})
export class BookComponent {
  @Input() bookDetails!: IBookId;

}
