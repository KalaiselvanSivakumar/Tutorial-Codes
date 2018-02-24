import { Component, OnInit } from '@angular/core';

import { CountryService } from '../country.service';
import { Country } from '../country';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {
  countries: Country[];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countries = this.countryService.getCountries();
  }

}
