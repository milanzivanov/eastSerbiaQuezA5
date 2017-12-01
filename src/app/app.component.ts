import { Component, enableProdMode, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceService } from './services/service.service';
// http
import {HttpClient} from '@angular/common/http';
// ac
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// tttt
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServiceService]
})
export class AppComponent implements OnInit {
  title = 'Quiz of the Cites';
  name = '';
  itemCount: number;
  btnText = 'Add City';
  cityName = '';
  time =  100;
  cites: string[] = [];
  region: string;
  arrayOfStrings: string[] = []; // a

  // http
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient, private router: Router) {}

  // timer f
  decrementTime() {
    this.time -= 1;
    if (this.time > 0) {
      setTimeout(() => this.decrementTime(), 1000);
    } else {
      // router to result page
      this.router.navigateByUrl('/result');
      this.time = 0;
      console.log('End of the game');
    }
  }

  ngOnInit() {
    // set time
    this.decrementTime();

    this.itemCount = this.cites.length;

    // Make the HTTP request:
    this.http.get(`https://next.json-generator.com/api/json/get/EkQeVrKeV`)
    .subscribe((data: Podaci) => { // a
      this.arrayOfStrings = data.ponudjene;
      this.time = data.vreme;
      this.region = data.oblast;
      console.log(data.vreme);
    });
  }

  // add city
  addCity() {
    this.cites.push(this.cityName);
    this.cityName = '';
    this.itemCount = this.cites.length;
    console.log(this.cites);
  }

  // remove city
  removeCity(i) {
    this.cites.splice(i, 1);
  }

  valueChanged(newVal) {
    console.log('Case 2: value is changed to ', newVal);
  }

  btnClick() {
    this.router.navigateByUrl('/result');
    this.time = 0;
  }
}

// test tipiovi
// class Podaci {
//   ponudjene: string[];
// }

interface Podaci {
  ponudjene: string[];
  vreme: number;
  oblast: string;
}
