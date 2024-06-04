import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { DateTime } from 'luxon';
import { Subject } from 'rxjs';
import { ChaptersComponent } from './chapters/chapters.component';
import { OnePieceService } from './services/onePiece/onePiece.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  standalone: true,
    providers: [OnePieceService],
    imports: [
        CommonModule,
        HttpClientModule,
        ChaptersComponent,
        RouterOutlet
    ]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'The One Piece Is Real';
  year = DateTime.now().get('year');
  private readonly _destroying$ = new Subject<void | null>();

  constructor(
  ) {}

  ngOnDestroy(): void {
    this._destroying$.next(null);
    this._destroying$.complete();
  }

  ngOnInit(): void {
  }
}