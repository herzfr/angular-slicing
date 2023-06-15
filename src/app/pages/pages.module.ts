import { NgModule } from '@angular/core';
import { ComponentModule } from '../component/component.module';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: PagesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, ComponentModule],
    exports: [],
    declarations: [PagesComponent],
    providers: [],
})
export class PagesModule { }
