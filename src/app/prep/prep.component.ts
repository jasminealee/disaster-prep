import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { PrepService } from '../prep.service';
import { Prep } from '../models/prep.model';

@Component({
  selector: 'app-prep',
  templateUrl: './prep.component.html',
  styleUrls: ['./prep.component.css'],
  providers: [PrepService]
})
export class PrepComponent implements OnInit {
  preps: FirebaseListObservable<any[]>;

  constructor(private prepService: PrepService, private router: Router) { }

  ngOnInit() {
    this.preps = this.prepService.getPreps();
  }

  goToPrepPage(selectedPrep) {
    this.router.navigate(['prep', selectedPrep.$key])
  }

  goBackToMainMenu() {
    this.router.navigate(['mainMenu']);
  }
}
