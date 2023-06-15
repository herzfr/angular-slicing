import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { VideosComponent } from './videos/videos.component';
import { ActivityComponent } from './activity/activity.component';
import { PeopleComponent } from './people/people.component';
import { DocumentsComponent } from './documents/documents.component';
import { ChannelComponent } from './channels/channels.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [CommonModule],
    exports: [
        NavigationComponent,
        VideosComponent,
        ActivityComponent,
        PeopleComponent,
        DocumentsComponent,
        ChannelComponent,
        FooterComponent
    ],
    declarations: [
        NavigationComponent,
        VideosComponent,
        ActivityComponent,
        PeopleComponent,
        DocumentsComponent,
        ChannelComponent,
        FooterComponent
    ],
    providers: [],
})
export class ComponentModule { }
