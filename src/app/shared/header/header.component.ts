import { AfterViewInit,Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RadioListServiceService } from 'src/app/radio-list-service.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  listOfCountries: any = [];
  listOfLanguages: any = [];
  listOfCodecs: any = [];
  listOfTags: any = [];
  listOfClicks: any = [];

  constructor(private apicall: RadioListServiceService,private router: Router, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
  }

  clickByCountryList() {
    this.apicall.getAllCountryListJson().subscribe(res => {
      this.listOfCountries = res;
      $('#countryModal').modal('show');
    }) 
  }

  clickByLanguagesList() {
    this.apicall.getAllLanguagesListJson().subscribe(res => {
      this.listOfLanguages = res;
      $('#languageModal').modal('show');
    })
  }

  clickByCodecsList() {
    this.apicall.getAllCodecsListJson().subscribe(res => {
      this.listOfCodecs = res;
      $('#codecsModal').modal('show');
    })
  }

  clickByTagsList() {
    this.apicall.getAllTagsListJson().subscribe(res => {
      this.listOfTags = res;
      $('#tagsModal').modal('show');
    })
  }

  clickByCountry(countryName) {
    $('.modal').modal('hide');
    this.router.navigate(['/country',countryName]);
  }

  clickByLanguage(languageName) {
    $('.modal').modal('hide');
    this.router.navigate(['/language',languageName]);
  }

  clickByCodec(codecName) {
    $('.modal').modal('hide');
    this.router.navigate(['/codec',codecName]);
  }

  clickByTag(tagName) {
    $('.modal').modal('hide');
    let regexp = /#(\S)/g;
    tagName = tagName.replace(regexp, '$1');
    this.router.navigate(['/tag',tagName]);
  }
 
  

}

