import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppConstants} from '../app/AppConstants';

@Injectable({
  providedIn: 'root'
})
export class RadioListServiceService {

  constructor(private http: HttpClient) { }

  getAllCountryListJson(): Observable<any> {
    return this.http.get(AppConstants.commonUrl+"/json/countries");
  }

  getAllLanguagesListJson(): Observable<any> {
    return this.http.get(AppConstants.commonUrl+"/json/languages");
  }

  getAllCodecsListJson(): Observable<any> {
    return this.http.get(AppConstants.commonUrl+"/json/codecs");
  }

  getAllTagsListJson(): Observable<any> {
    return this.http.get(AppConstants.commonUrl+"/json/tags");
  }

  getAllRadioStationListJson(): Observable<any> {
    return this.http.get(AppConstants.commonUrl+"/json/stations");
  }

  getAllClicksListJson(): Observable<any> {
    return this.http.get(AppConstants.commonUrl+"/json/stations/topclick/100");
  }

  getAllVotesListJson(): Observable<any> {
    return this.http.get(AppConstants.commonUrl+"/json/stations/topvote/100");
  }

  getAllLastClickedListJson(): Observable<any> {
    return this.http.get(AppConstants.commonUrl+"/json/stations/lastclick/100");
  }

  getAllLastChangedListJson(): Observable<any> {
    return this.http.get(AppConstants.commonUrl+"/json/stations/lastchange/100");
  }

  eachCountryJson(countryName): Observable<any> {
    return this.http.get(AppConstants.commonUrl+"/json/stations/bycountryexact/"+countryName)
  }

  eachLanguageJson(languageName): Observable<any> {
    return this.http.get(AppConstants.commonUrl+"/json/stations/bylanguageexact/"+languageName)
  }

  eachCodecJson(codecName): Observable<any> {
    return this.http.get(AppConstants.commonUrl+"/json/stations/bycodecexact/"+codecName)
  }

  eachTagJson(tagName): Observable<any> {
    return this.http.get(AppConstants.commonUrl+"/json/stations/bytagexact/"+tagName)
  }

  playingRadio(stationuuid): Observable<any> {
    return this.http.get(AppConstants.commonUrl+"/json/url/"+stationuuid)
  }

}
