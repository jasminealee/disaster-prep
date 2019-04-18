import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Prep } from './models/prep.model';

@Injectable()
export class PrepService {
  preps: FirebaseListObservable<any[]>


  constructor(private database: AngularFireDatabase, private router: Router) { 
    this.preps = database.list('preps');
  }

  getPreps() {
    return this.preps;
  }

  goToPrepLibrary() {
    return this.router.navigate(['prep']);
  }

  addPreps(newPrep: Prep) {
    this.preps.push(newPrep);
  }

  getPrepById(prepId: string) {
    return this.database.object('preps/' + prepId);
  }

  deletePrepById(prepId: string) {
    var prepEntryInFirebase = this.getPrepById(prepId);
    prepEntryInFirebase.remove();
  }
}
