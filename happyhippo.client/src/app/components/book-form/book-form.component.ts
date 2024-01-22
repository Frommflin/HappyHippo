import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { IBook } from 'src/app/models/book.model';

@Component({
  selector: 'hippo-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['../../styles/css/book-form.component.css']
})
export class BookFormComponent implements OnInit {
  newBook: boolean = true;
  book: IBook = {
    title: '',
    author: '',
    year: 0,
    userId: ''
  };

  constructor(private bookService: BookService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUser().subscribe({
      next: (response) => {
        if (response != null) {
          this.book.userId = response.username
        }
      }
    })

  }

  addNewBook() {
    this.bookService.addBook(this.book).subscribe({
      next: () => this.router.navigate(['/books'])
    });
  }

}
