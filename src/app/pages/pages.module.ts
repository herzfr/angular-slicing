import { NgModule } from '@angular/core';
import { ComponentModule } from '../component/component.module';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { AllService } from '../services/all.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    { path: '', component: PagesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, ComponentModule, HttpClientModule],
    exports: [],
    declarations: [PagesComponent],
    providers: [AllService],
})
export class PagesModule { }
