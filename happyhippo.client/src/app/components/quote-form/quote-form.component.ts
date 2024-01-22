import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IQuote } from 'src/app/models/quote.model';
import { QuoteService } from 'src/app/services/quote.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'hippo-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['../../styles/css/quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  quote: IQuote = {
    quoteText: '',
    author: '',
    userId: ''
  }

  constructor(private quoteService: QuoteService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUser().subscribe({
      next: (response) => {
        if (response == null) {
          this.router.navigate(['/home'])
        } else {
          this.quote.userId = response.username
        }
      }
    })
  }

  addNewQuote() {
    this.quoteService.addQuote(this.quote).subscribe({
      next: () => this.router.navigate(['/quotes'])
    });
  }

}
