import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPeople } from 'src/app/interfaces/all.interface';
import { AllService } from 'src/app/services/all.service';

@Component({
    selector: 'people-app',
    templateUrl: 'people.component.html',
    styleUrls: ['people.component.css']
})

export class PeopleComponent implements OnInit {
    $people: Observable<IPeople[]> | undefined;
    constructor(private _service: AllService) { }

    ngOnInit() {
        this.getPeople()
    }

    getPeople() {
        this.$people = this._service.fetchPeople()
    }
}