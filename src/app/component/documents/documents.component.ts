import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AllService } from '../../services/all.service';
import { IDocument } from '../../interfaces/all.interface';

@Component({
    selector: 'documents-app',
    templateUrl: 'documents.component.html',
    styleUrls: ['documents.component.css']
})

export class DocumentsComponent implements OnInit {
    $docs: Observable<IDocument[]> | undefined;
    constructor(private _service: AllService) { }

    ngOnInit() {
        this.getDocs()
    }

    getDocs() {
        this.$docs = this._service.fetchDocument()
    }
}