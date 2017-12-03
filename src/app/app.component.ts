import { Component, enableProdMode, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceService } from './services/service.service';
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
  title = 'East Serbia Cities';
  name = '';
  itemCount: number;
  btnText = 'Add City';
  cityName = '';
  time =  100;
  cites: string[] = [];
  region: string;
  arrayOfStrings: string[] = []; // a
  corect: string;

  addedCites: string[] = [];

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
    // addedCites
    console.log(`Added cites: ${this.addedCites}`);

    // set time
    this.decrementTime();

    // counter
    this.itemCount = this.cites.length;

    // Make the HTTP request:
    this.http.get(`https://next.json-generator.com/api/json/get/EkQeVrKeV`)
    .subscribe((data: Podaci) => { // a
      this.arrayOfStrings = data.ponudjene;
      this.time = data.vreme;
      this.region = data.oblast;
      this.corect = data.tacno;
      console.log(data.vreme);
      console.log(data.tacno);
    });
  }

  // add city f
  addCity() {
    this.cites.push(this.cityName);
    this.addedCites.push(this.cityName);
    this.cityName = '';
    this.itemCount = this.cites.length;
    console.log(this.cites);
  }

  // remove city f
  removeCity(i) {
    this.cites.splice(i, 1);
  }
  // navigate to home f
  btnClick() {
    this.router.navigateByUrl('/result');
    this.time = 0;
  }

}

interface Podaci {
  ponudjene: string[];
  vreme: number;
  oblast: string;
  tacno: string;
}

// test tipiovi
// class Podaci {
//   ponudjene: string[];
// }
