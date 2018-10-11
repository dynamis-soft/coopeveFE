import { NgModule } from '@angular/core';

import { LoginComponent } from './components/login/login.component';
import { routing } from './landing-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        routing,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule
    ],
    declarations: [LoginComponent, ]
})
export class LandingModule { }

