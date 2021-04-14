import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationListsComponent } from './station-lists/station-lists.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClicksListComponent } from './clicks-list/clicks-list.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountryStationsComponent } from './country-stations/country-stations.component';
import { LanguageStationsComponent } from './language-stations/language-stations.component';
import { CodecStationsComponent } from './codec-stations/codec-stations.component';
import { TagsStationsComponent } from './tags-stations/tags-stations.component';
import { VotesStationsComponent } from './votes-stations/votes-stations.component';
import { LatelyPlayedStationsComponent } from './lately-played-stations/lately-played-stations.component';
import { LatelyChangedStationsComponent } from './lately-changed-stations/lately-changed-stations.component';


@NgModule({
  declarations: [
    AppComponent,
    StationListsComponent,
    HeaderComponent,
    FooterComponent,
    ClicksListComponent,
    CountryStationsComponent,
    LanguageStationsComponent,
    CodecStationsComponent,
    TagsStationsComponent,
    VotesStationsComponent,
    LatelyPlayedStationsComponent,
    LatelyChangedStationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxAudioPlayerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
