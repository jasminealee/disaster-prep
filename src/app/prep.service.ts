import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Scenario } from './models/scenario.model';

@Injectable()
export class PrepService {


  constructor(private database: AngularFireDatabase, private router: Router) { 

  }
  goToPrepLibrary() {
    return this.router.navigate(['prep']);
  }
}
