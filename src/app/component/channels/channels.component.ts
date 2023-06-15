import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IChannel } from 'src/app/interfaces/all.interface';
import { AllService } from 'src/app/services/all.service';

@Component({
    selector: 'channel-app',
    templateUrl: 'channels.component.html',
    styleUrls: ['channels.component.css']
})

export class ChannelComponent implements OnInit {
    $channel: Observable<IChannel[]> | undefined;
    constructor(private _service: AllService) { }

    ngOnInit() {
        this.getChannel()
    }

    getChannel() {
        this.$channel = this._service.fetchChannel()
    }
}