import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quizApp';
  startQuizValue:boolean = false;
  /** Start Quiz Cick */
  startQuiz(){
    this.startQuizValue = true;
  }

  /** Exit Click */
  exitClick(){
    this.startQuizValue = false;
  }
}
