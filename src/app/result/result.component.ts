import { Component, OnInit } from '@angular/core';
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
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }
  // back to home f
  backHome() {
    this.router.navigate(['']);
  }

}
