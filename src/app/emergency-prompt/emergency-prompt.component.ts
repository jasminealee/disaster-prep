import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emergency-prompt',
  templateUrl: './emergency-prompt.component.html',
  styleUrls: ['./styles/emergency-prompt.component.css', './styles/animation.css']
})
export class EmergencyPromptComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToEmergencyInfo() {
    this.router.navigate(['emergencyInfo']);
  }

  goToMainMenu() {
    this.router.navigate(['mainMenu']);
  }

  goToScenarioPrompt() {
    this.router.navigate(['scenarios']);
  }
}
