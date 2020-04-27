import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AppService} from './typeahead-simple-sample.service';

@Component({
  selector: 'app-typeahead-simple-sample',
  templateUrl: './typeahead-simple-sample.component.html',
  styleUrls: ['./typeahead-simple-sample.component.scss']
})
export class TypeaheadSimpleSampleComponent implements OnInit {

// Parameteres for the input type are defined below. The url is generated using `json-server`.
  // Please run your own instance of the json-server to use the the below url.
  queryParam = 'q';
  url = 'http://localhost:3000/countries';

  constructor(private appService: AppService) {
  }

  testFormGroup: FormGroup = new FormGroup({country: new FormControl('')});
  countries: Array<string> = [];

  ngOnInit() {
    this.appService.getCountries().subscribe(data => (this.countries = data));
  }

  getFilteredSuggestions(filteredDataLst: Array<any>) {
    this.countries = [...filteredDataLst];
  }
}
