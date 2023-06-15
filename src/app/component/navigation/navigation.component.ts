import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'navigation-app',
    template: `
    <div class="d-flex">
        <div class="col-12 col-sm-3 align-self-center p-2">
            <a class="navbar-brand" href="#">Navbar</a>
        </div>
        <div class="col-12 col-sm-5 align-self-center p-2">
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            </form>
        </div>
        <div class="col p-2 d-flex flex-column flex-grow">
            <div class="d-flex">
                <button class="col-6">Upload</button>
                <div class="col-2">
                    <div class="card"></div>
                </div>
                <div class="col px-2">
                    <h6 class="text-end text-sm-start mb-0">Wasem</h6>
                    <p class="text-end text-sm-start mb-0">Arshar</p>
                </div>
            </div>
        </div>
    </div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link" href="#">Videos</a> <span class="d-flex justify-content-center align-items-center px-2">/</span>
                <a class="nav-item nav-link" href="#">People</a> <span class="d-flex justify-content-center align-items-center px-2">/</span>
                <a class="nav-item nav-link" href="#">Documents</a> <span class="d-flex justify-content-center align-items-center px-2">/</span>
                <a class="nav-item nav-link" href="#">Events</a> <span class="d-flex justify-content-center align-items-center px-2">/</span>
                <a class="nav-item nav-link" href="#">Communities</a> <span class="d-flex justify-content-center align-items-center px-2">/</span>
                <a class="nav-item nav-link" href="#">Favorites</a> <span class="d-flex justify-content-center align-items-center px-2">/</span>
                <a class="nav-item nav-link" href="#">Channels</a>
            </div>
        </div>
    </nav>
    `
})

export class NavigationComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}