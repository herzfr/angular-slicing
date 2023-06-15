import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
    selector: 'navigation-app',
    template: `
    <div class="row px-3" #navi>
        <div class="col-12 col-sm-3 align-self-center p-2">
            <a class="navbar-brand" href="#">
                <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" alt="">
            </a>
        </div>
        <div class="col-12 col-sm-5 align-self-center p-2">
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            </form>
        </div>
        <div class="col p-2 d-flex flex-column flex-grow">
            <div class="d-flex">
                <button class="col-6 button-upload m-2">
                    <i class="bi bi-upload mr-1"></i> Upload
                </button>
                <div class="col-2 p-2">
                    <div class="card">
                        <img src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" class="rounded mx-auto d-block avatar" alt="...">
                    </div>
                </div>
                <div class="col p-2">
                    <h6 class="text-end text-sm-start mb-0">Herza</h6>
                    <p class="text-end text-sm-start mb-0">Fellani R</p>
                </div>
            </div>
        </div>
    </div>

    <nav class="navbar navbar-expand-lg nav-bg-color px-3"  [class.sticky]="sticky">
        <button #toggle class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav">
                <a class="nav-item nav-link" href="#video">Videos</a>
                <a class="nav-item nav-link" href="#people">People</a>
                <a class="nav-item nav-link" href="#document">Documents</a>
                <a class="nav-item nav-link" href="#">Events</a>
                <a class="nav-item nav-link" href="#">Communities</a>
                <a class="nav-item nav-link" href="#">Favorites</a>
                <a class="nav-item nav-link" href="#channel">Channels</a>
            </div>
        </div>
    </nav>
    `,
    styleUrls: ['navigation.component.css']
})

export class NavigationComponent implements OnInit {

    @ViewChild('navi')
    navi: ElementRef | undefined

    sticky: boolean = false

    constructor() { }

    ngOnInit() { }

    @HostListener('window:scroll', ['$event'])
    onScrollEvent() {
        // let breakpoint = window.innerWidth
        let parent = window.scrollY
        let child = this.navi?.nativeElement.getBoundingClientRect().height;
        this.sticky = child < parent

        // if (breakpoint <= 992) {
        //     this.sticky = child < parent
        // }
    }
}