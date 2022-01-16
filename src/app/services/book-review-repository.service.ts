import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BookReview } from './book-review';

@Injectable({
  providedIn: 'root'
})
export class BookReviewRepositoryService {

  private reviews: BookReview[] = [];

  private loadReviews(): void {
    this.httpClient.get<BookReview[]>(`${environment.booksUri}/BookReview`)
      .subscribe (result => this.reviews = result);
  }

  constructor (private httpClient: HttpClient){
    this.loadReviews();
  }

  getReviews (): BookReview[] {
    return this.reviews;
  }

  addReview (review: BookReview): void{
    this.httpClient.post<any>(`${environment.booksUri}/BookReview`, review)
      .subscribe(result => this.loadReviews());
  }
}

