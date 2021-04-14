import { AfterViewInit,Component, OnInit } from '@angular/core';
import { RadioListServiceService } from '../radio-list-service.service';
import { Track } from 'ngx-audio-player'; 
import { ActivatedRoute,Params,Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-station-lists',
  templateUrl: './station-lists.component.html',
  styleUrls: ['./station-lists.component.css']
})
export class StationListsComponent implements OnInit {

  isPlaying: boolean = true;
  listOfRadioStations: any = [];
  config: any;
  radioStationInfo: any= [];
  collection = { data: [] };
  listOfClicks: any = [];
  defaultImage: string;
  eachCountryList: any = [];
  musicInfo: any;

  // msaapPlaylist: Track[];

  constructor(private apicall: RadioListServiceService) {
    this.defaultImage = "https://lh3.googleusercontent.com/proxy/ZFijy9HaUyiOFrAM3be1xbFLZP4C4GiGn53wsMyqk0IhMQvvTeKJUIq-rWTMq3yqgevTKlNHdL1u8nXsE7dJw98h";
    this.allRadioStationList(); 
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    $('#homePageModal').modal('show');
  }
  

  allRadioStationList() {
    this.apicall.getAllRadioStationListJson().subscribe(res => {
      this.listOfRadioStations = res;
      console.log(this.listOfRadioStations);

      for (var i = 0; i < this.listOfRadioStations.length; i++) {
        this.collection.data.push(
          {
            changeuuid: this.listOfRadioStations[i].changeuuid,
            stationuuid: this.listOfRadioStations[i].stationuuid,
            name: this.listOfRadioStations[i].name,
            url: this.listOfRadioStations[i].url,
            url_resolved: this.listOfRadioStations[i].url_resolved,
            homepage: this.listOfRadioStations[i].homepage,
            favicon: this.listOfRadioStations[i].favicon,
            tags: this.listOfRadioStations[i].tags,
            country: this.listOfRadioStations[i].country,
            countrycode: this.listOfRadioStations[i].countrycode,
            state: this.listOfRadioStations[i].state,
            language: this.listOfRadioStations[i].language,
            votes: this.listOfRadioStations[i].votes,
            lastchangetime: this.listOfRadioStations[i].lastchangetime,
            codec: this.listOfRadioStations[i].codec,
            bitrate: this.listOfRadioStations[i].bitrate,
            hls: this.listOfRadioStations[i].hls,
            lastcheckok: this.listOfRadioStations[i].lastcheckok,
            lastchecktime: this.listOfRadioStations[i].lastchecktime,
            lastcheckoktime: this.listOfRadioStations[i].lastcheckoktime,
            lastlocalchecktime: this.listOfRadioStations[i].lastlocalchecktime,
            clicktimestamp: this.listOfRadioStations[i].clicktimestamp,
            clickcount: this.listOfRadioStations[i].clickcount,
            clicktrend: this.listOfRadioStations[i].clicktrend
          }
        );
      } 
    })
    this.config = {
      id: 'basicPaginate',
      itemsPerPage: 12,
      currentPage: 1,
      totalItems: this.listOfRadioStations.length
    };
  }

  stationInfo(eachradiostation){
    this.radioStationInfo = eachradiostation;
    this.apicall.playingRadio( this.radioStationInfo.stationuuid).subscribe(res => {
      this.musicInfo = res;
    })
    $('#radiostationModal').modal('show');
  }

  clickByClicksList() {
    this.apicall.getAllClicksListJson().subscribe(res => {
      this.listOfClicks = res;
      $('#countryModal').modal('show');
    })
  }
 

msaapDisplayTitle = true;
msaapDisplayPlayList = true;
msaapPageSizeOptions = [2,4,6];
msaapDisplayVolumeControls = true;
msaapDisplayRepeatControls = true;
msaapDisplayArtist = false;
msaapDisplayDuration = false;
msaapDisablePositionSlider = true;

// Material Style Advance Audio Player Playlist
 msaapPlaylist: Track[] = [   {
    title: "Radio Mirchi",
    link: "https://radioindia.net/radio/mirchi98/icecast.audio"
  }
 ];


onEnded(event) {
  console.log(event);
}


 
}
