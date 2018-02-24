import { Injectable } from '@angular/core';

import { Country } from './country';
import { COUNTRIES } from './country-data';

@Injectable()
export class CountryService {

    constructor() { }

    getCountries(): Country[] {
        return COUNTRIES;
    }

    getPopulatedCountries(): Country[] {
        return COUNTRIES.sort((country1, country2) => country2.population - country1.population)
                        .slice(0, 3);
    }

    getLargestCountries(): Country[] {
        return COUNTRIES.sort((country1, country2) => country2.area - country1.area)
                        .slice(0, 3);
    }

    getGDPCountries(): Country[] {
        return COUNTRIES.sort((country1, country2) => country2.gdp - country1.gdp)
                        .slice(0, 3);
    }

    getCountry(name: string): Country {
        return COUNTRIES.find(country => country.name === name);
    }

}
