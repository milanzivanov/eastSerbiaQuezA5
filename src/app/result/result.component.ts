import { Component, OnInit } from '@angular/core';
import { ResultMediator } from './../resultMediator';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  correctAnswers: string;

  constructor(private route: ActivatedRoute,
              private router: Router) {
      this.correctAnswers = ResultMediator.getQueezResult().length.toString(); // number

      }

  ngOnInit() {

  }

  // back to home f
  backHome() {
    this.router.navigate(['']);
  }

}
