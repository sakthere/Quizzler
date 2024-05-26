import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-quizz-screen',
  templateUrl: './quizz-screen.component.html',
  styleUrls: ['./quizz-screen.component.scss'],
})
export class QuizzScreenComponent implements OnInit {
  public declare receivedValue: number;
  public progress!: number;
  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.receivedValue = params['value'];
    });
    this.progress = 60;
    }

}
