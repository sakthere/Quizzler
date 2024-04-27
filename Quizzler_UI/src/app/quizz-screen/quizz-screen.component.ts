import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quizz-screen',
  templateUrl: './quizz-screen.component.html',
  styleUrls: ['./quizz-screen.component.scss'],
})
export class QuizzScreenComponent implements OnInit {
  receivedValue?: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.receivedValue = params['value'];
    });
  }
}