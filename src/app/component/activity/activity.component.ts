import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AllService } from '../../services/all.service';
import { IActivity } from '../../interfaces/all.interface';


@Component({
    selector: 'activity-app',
    templateUrl: 'activity.component.html',
    styleUrls: ['activity.component.css']
})

export class ActivityComponent implements OnInit {

    $activity: Observable<IActivity[]> | undefined;
    constructor(private _service: AllService) { }

    ngOnInit() {
        this.getActivity()
    }

    getActivity() {
        this.$activity = this._service.fetchActivity()
    }
}