import { Component, OnInit } from '@angular/core';
import { ScenarioService } from '../scenario.service';
import { PrepService } from '../prep.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  providers: [ScenarioService, PrepService]
})
export class MainMenuComponent implements OnInit {

  constructor(private router: Router, private scenarioService: ScenarioService, private prepService: PrepService) { }

  ngOnInit() {
  }

  goToScenario() {
    this.scenarioService.goToScenarioLibarary()
  }

  goToPrep() {
    this.prepService.goToPrepLibrary()
  }

  goToSurvival() {
    return this.router.navigate(['survival']);
  }
}
