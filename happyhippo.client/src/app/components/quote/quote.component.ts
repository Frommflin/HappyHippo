import { Component, Input } from '@angular/core';
import { IQuoteId } from 'src/app/models/quote.model';

@Component({
  selector: 'hippo-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['../../styles/css/quote.component.css']
})
export class QuoteComponent {
  @Input() quoteDetails!: IQuoteId

}
