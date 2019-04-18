import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Scenario } from './models/scenario.model';


@Injectable()
export class ScenarioService {
  scenarios: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase, private router: Router) { 
    this.scenarios = database.list('scenarios');
  }

  getScenarios() {
    return this.scenarios;
  }

  addScenario(newScenario: Scenario) {
    this.scenarios.push(newScenario);
  }

  getScenarioById(scenarioId: string) {
    return this.database.object('scenarios/' + scenarioId); //scenarios in json with scenarioId, requesting a single object
  }

  goToScenarioLibarary() {
    return this.router.navigate(['/scenarios']);
  }

  deleteScenario(scenarioId) {
    var scenarioEntryInFirebase = this.getScenarioById(scenarioId);
    scenarioEntryInFirebase.remove();

  }
}
