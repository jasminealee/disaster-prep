import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ScenarioService } from '../scenario.service';
import { Scenario } from '../models/scenario.model';

@Component({
  selector: 'app-scenarios',
  templateUrl: './scenarios.component.html',
  styleUrls: ['./scenarios.component.css'],
  providers: [ScenarioService]
})
export class ScenariosComponent implements OnInit {
  scenarios: FirebaseListObservable<any[]>;

  constructor(private scenarioService: ScenarioService, private router: Router) { }

  ngOnInit() {
    this.scenarios = this.scenarioService.getScenarios();
  }

  goToScenarioPage(selectedScenario) {
    this.router.navigate(['scenarios', selectedScenario.$key]);
  }
  gotToAddScenarioPage() {
    this.router.navigate(['addScenario']);
  }
}
