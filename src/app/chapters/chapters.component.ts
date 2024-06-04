import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, map } from 'rxjs';
import { OnePieceService } from '@app/services/onePiece/onePiece.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { chapter } from '@app/models/chapter';

@Component({
  selector: 'app-members',
  standalone:true,
  imports:[
    CommonModule,
    HttpClientModule,
  ],
  providers: [OnePieceService],
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.less']
})
export class ChaptersComponent implements OnInit {
  public errorMessage$ = new BehaviorSubject<string>('');
  public chaptersResponse$ = new BehaviorSubject<chapter[]>([]);
  submitted = false;
  
  constructor(
    private service: OnePieceService,
  ) {
  }
  ngOnInit(): void {
      this.errorMessage$.next("");
      this.service
        .getChapters()
        .pipe(
        )
        .subscribe(
          (response: chapter[]) => {
              this.chaptersResponse$.next(response);
          },
        );
    }
}
