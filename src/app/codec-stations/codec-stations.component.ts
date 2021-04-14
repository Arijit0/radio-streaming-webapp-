import { Component, OnInit } from '@angular/core';
import { RadioListServiceService } from '../radio-list-service.service';
import { Track } from 'ngx-audio-player'; 
import { ActivatedRoute,Params,Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-codec-stations',
  templateUrl: './codec-stations.component.html',
  styleUrls: ['./codec-stations.component.css']
})
export class CodecStationsComponent implements OnInit {

  config: any;
  listOfRadioStations: any = [];
  collection = { data: [] };
  radioStationInfo: any= [];
  eachCountryList: any = [];
  defaultImage: string;

  constructor(private apicall: RadioListServiceService, private route: ActivatedRoute) {
    $('.modal').modal('hide');
    
    route.params.subscribe(val => {
      
      this.getEachCodecList();
    });
    // this.getEachCountryList();
   }

  ngOnInit(): void {
  }

  getEachCodecList() {
    this.defaultImage = "https://lh3.googleusercontent.com/proxy/ZFijy9HaUyiOFrAM3be1xbFLZP4C4GiGn53wsMyqk0IhMQvvTeKJUIq-rWTMq3yqgevTKlNHdL1u8nXsE7dJw98h";
    let codecName = this.route.snapshot.paramMap.get('codec-name');
    this.apicall.eachCodecJson(codecName).subscribe(res => {
      this.listOfRadioStations = res;
     
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
          });
      } 
      
    },
    (err => {
      console.log(err);
    })
    );

    this.config = {
      id: 'basicPaginate',
      itemsPerPage: 12,
      currentPage: 1,
      totalItems: this.listOfRadioStations.length
    };
  }


  pageChanged(event) {
    this.config.currentPage = event;
  }

  stationInfo(eachradiostation){
    this.radioStationInfo = eachradiostation;
    $('#radiostationModal').modal('show');
    console.log(this.radioStationInfo);
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
