import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClicksListComponent } from './clicks-list/clicks-list.component';
import { CodecStationsComponent } from './codec-stations/codec-stations.component';
import { CountryStationsComponent } from './country-stations/country-stations.component';
import { LanguageStationsComponent } from './language-stations/language-stations.component';
import { LatelyChangedStationsComponent } from './lately-changed-stations/lately-changed-stations.component';
import { LatelyPlayedStationsComponent } from './lately-played-stations/lately-played-stations.component';
import { StationListsComponent } from './station-lists/station-lists.component';
import { TagsStationsComponent } from './tags-stations/tags-stations.component';
import { VotesStationsComponent } from './votes-stations/votes-stations.component';

const routes: Routes = [
  {path: '', component: StationListsComponent},
  {path: 'country/:country-name', component: CountryStationsComponent},
  {path: 'language/:language-name', component: LanguageStationsComponent},
  {path: 'codec/:codec-name', component: CodecStationsComponent},
  {path: 'tag/:tag-name', component: TagsStationsComponent},
  {path: 'clicks', component: ClicksListComponent},
  {path: 'votes', component: VotesStationsComponent},
  {path: 'lately-played', component: LatelyPlayedStationsComponent},
  {path: 'lately-changed', component: LatelyChangedStationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
