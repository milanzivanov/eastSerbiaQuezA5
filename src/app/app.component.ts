import { Component, enableProdMode, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceService } from './services/service.service';
import { ResultMediator } from './resultMediator';
// http
import {HttpClient} from '@angular/common/http';
// ac
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
// router
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServiceService]
})

export class AppComponent implements OnInit {

  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient,
              private router: Router) {}

  time =  100;
  data: Data; // interface
  title = 'Cities of East Serbia';
  name = '';
  btnText = 'Add City';
  cityName = '';
  region: string;
  addedCities: string[] = [];

  decrementTime() {
    this.time -= 1;
    if (this.time > 0) {
      setTimeout(() => this.decrementTime(), 1000);
    } else {
      this.endGame();
    }
  }

  endGame() {

    const correctCities = this.addedCities
      .filter((p) => this.data.tacno.some((p2) => p2 === p));

    ResultMediator.setQueezResult(correctCities);
    this.time = 0;
    this.router.navigateByUrl('/result');
    this.addedCities = [];
  }

  ngOnInit() {

    this.data = {
      ponudjene: [],
      vreme: 0,
      oblast: '',
      tacno: []
    };

    // set time
    this.decrementTime();

    // Make the HTTP request:
    this.http.get(`https://next.json-generator.com/api/json/get/EkQeVrKeV`)
    .subscribe((data: Data) => {
      this.data = data;
    });
  }

  // added cites
  addCity() {
    this.addedCities.push(this.cityName);
    this.cityName = '';
  }

  // remove city f
  removeCity(i) {
    this.addedCities.splice(i, 1);
  }

  // navigate to home f
  btnClick() {
    this.endGame();
  }
}

interface Data {
  ponudjene: string[];
  vreme: number;
  oblast: string;
  tacno: string[];
}

// test tipiovi
// class Data {
//   ponudjene: string[];
// }
