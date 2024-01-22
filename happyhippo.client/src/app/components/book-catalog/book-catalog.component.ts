import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBookId } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'hippo-book-catalog',
  templateUrl: './book-catalog.component.html',
  styleUrls: ['../../styles/css/book-catalog.component.css']
})
export class BookCatalogComponent implements OnInit {

  user: string = '';
  books: IBookId[] = [];

  constructor(private userService: UserService, private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.userService.getUser().subscribe({
      next: (response) => {
        if (response == null) {
          this.router.navigate(['/home'])
        }else{
          this.user = response.username
          this.collectBooks();
        }
      }
    })
  }

  collectBooks() {
    this.bookService.getBooks(this.user).subscribe({
      next: (response) => {
        this.books = response
      }
    })
  }

  deleteBook(book: IBookId){
    this.bookService.deleteBook(book.id).subscribe({
      next: () => this.collectBooks()
    })
  }

}
