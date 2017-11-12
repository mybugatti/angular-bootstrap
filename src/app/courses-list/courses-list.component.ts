import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CoursesListComponent implements OnInit {

    // on créé un observable pour les données
    coursesObservable: Observable<any[]>;

    /**
     *
     * @param {AngularFireDatabase} db
     */
    constructor(private db: AngularFireDatabase) { }

    ngOnInit() {
        this.coursesObservable = this.getCourses('/courses');
    }

    /**
     *
     * @param listPath
     * @returns {Observable<any[]>}
     */
    getCourses(listPath): Observable<any[]> {
        return this.db.list(listPath).valueChanges();
    }

}
