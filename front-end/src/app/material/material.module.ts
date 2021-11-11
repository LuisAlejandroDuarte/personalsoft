import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'

import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input'

import {MatSelectModule} from '@angular/material/select'
import {MatCheckboxModule} from '@angular/material/checkbox'

import {MatDatepickerModule} from '@angular/material/datepicker'

import {MatNativeDateModule} from '@angular/material/core'
import {MatTabsModule} from '@angular/material/tabs'

import {MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatCardModule} from '@angular/material/card'
import {MatTableModule} from '@angular/material/table';

import {MatPaginatorModule} from '@angular/material/paginator';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatTreeModule} from '@angular/material/tree';




@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatRadioModule, 
    MatTreeModule
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
