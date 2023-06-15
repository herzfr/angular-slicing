import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IActivity, IChannel, IDocument, IPeople, IVideo } from '../interfaces/all.interface';

@Injectable()
export class AllService {

    // MOCKHA
    // url = 'https://apimocha.com/headline/'

    // MOCKY
    url = 'https://run.mocky.io/v3'
    constructor(private httpClient: HttpClient) { }

    // fetchVideos() {
    //     return this.httpClient.get<IVideo[]>(`${this.url}/video`).pipe(map(m => m as IVideo[]))
    // }

    // fetchActivity() {
    //     return this.httpClient.get<IActivity[]>(`${this.url}/activity`).pipe(map(m => m as IActivity[]))
    // }

    // fetchPeople() {
    //     return this.httpClient.get<IPeople[]>(`${this.url}/people`).pipe(map(m => m as IPeople[]))
    // }

    // fetchChannel() {
    //     return this.httpClient.get<IChannel[]>(`${this.url}/channel`).pipe(map(m => m as IChannel[]))
    // }

    // fetchDocument() {
    //     return this.httpClient.get<IDocument[]>(`${this.url}/document`).pipe(map(m => m as IDocument[]))
    // }

    fetchVideos() {
        const langPath = `assets/data/video.json`;
        return this.httpClient.get<IVideo[]>(langPath)
    }

    fetchActivity() {
        const langPath = `assets/data/activity.json`;
        return this.httpClient.get<IActivity[]>(langPath)
    }

    fetchPeople() {
        const langPath = `assets/data/people.json`;
        return this.httpClient.get<IPeople[]>(langPath)
    }

    fetchChannel() {
        const langPath = `assets/data/channel.json`;
        return this.httpClient.get<IChannel[]>(langPath)
    }

    fetchDocument() {
        const langPath = `assets/data/document.json`;
        return this.httpClient.get<IDocument[]>(langPath)
    }
}