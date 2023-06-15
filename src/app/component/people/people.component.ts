import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AllService } from '../../services/all.service';
import { IPeople } from '../../interfaces/all.interface';

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