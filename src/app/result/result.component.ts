import { Component, OnInit } from '@angular/core';
import { ResultMediator } from './../resultMediator';
// back to home
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  // back to home
  correctAnswers: string;

  constructor(private route: ActivatedRoute,
              private router: Router) {
      // this.correctAnswers = ResultMediator.getQueezResult().join(', '); // string
      this.correctAnswers = ResultMediator.getQueezResult().length.toString(); // number

      }

  ngOnInit() {

  }

  // back to home f
  backHome() {
    this.router.navigate(['']);
  }

}
