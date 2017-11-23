import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSidenavModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
} from '@angular/material';


@NgModule({
  imports: [
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSidenavModule,
    MatProgressSpinnerModule
  ],
  declarations: []
})
export class SharedModule {
}
