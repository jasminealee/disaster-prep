import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Scenario } from '../models/scenario.model';
import { ScenarioService } from '../scenario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-scenario',
  templateUrl: './add-scenario.component.html',
  styleUrls: ['./add-scenario.component.css'],
  providers: [ScenarioService]
})
export class AddScenarioComponent implements OnInit {
  newScenario;
  source = null;

  constructor(private router: Router, private scenarioService: ScenarioService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  submitForm(newTitle) {
    this.newScenario = new Scenario(newTitle, this.source)
    this.scenarioService.addScenario(this.newScenario);
  }
  
  goBackToScenarios(){
    this.router.navigate(['scenarios']);
  }
}
