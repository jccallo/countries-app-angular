import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {
  query: string = 'hola'

  constructor(private countryService: CountryService) {}

  search() {
    console.log(this.query)
    this.countryService.searchCountry(this.query)
      .subscribe(resp => {
        console.log(resp)
      })
  }
}
