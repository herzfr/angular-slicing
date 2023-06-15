import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IVideo } from 'src/app/interfaces/all.interface';
import { AllService } from 'src/app/services/all.service';

@Component({
    selector: 'videos-app',
    templateUrl: 'videos.component.html',
    styleUrls: ['videos.component.css']
})

export class VideosComponent implements OnInit {
    $videos: Observable<IVideo[]> | undefined;
    constructor(private _service: AllService) { }

    ngOnInit() {
        this.getVideos()
    }

    getVideos() {
        this.$videos = this._service.fetchVideos()
    }
}