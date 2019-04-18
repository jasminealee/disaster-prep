import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.css']
})
export class SplashPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToEmergencyPrompt() {
    this.router.navigate(['/emergencyPrompt'])
  }
}
