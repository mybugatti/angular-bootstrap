import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {AppNavbarComponent} from './app-navbar/app-navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CoursesListComponent} from './courses-list/courses-list.component';
import {FormsModule} from '@angular/forms';
import {JokeListComponent} from './joke-list/joke-list.component';
import {JokeFormComponent} from './joke-form/joke-form.component';
import {JokeComponent} from './joke/joke.component';

@NgModule({
    declarations: [
        AppComponent,
        AppNavbarComponent,
        CoursesListComponent,
        JokeListComponent,
        JokeFormComponent,
        JokeComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        FormsModule,
        NgbModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
