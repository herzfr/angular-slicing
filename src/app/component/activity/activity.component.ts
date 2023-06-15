import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IActivity } from 'src/app/interfaces/all.interface';
import { AllService } from 'src/app/services/all.service';

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