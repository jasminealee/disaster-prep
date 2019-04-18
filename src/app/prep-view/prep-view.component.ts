import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { PrepService } from '../prep.service';
import { Prep } from '../models/prep.model';


@Component({
  selector: 'app-prep-view',
  templateUrl: './prep-view.component.html',
  styleUrls: ['./prep-view.component.css'],
  providers: [PrepService]
})
export class PrepViewComponent implements OnInit {
  prepId;
  selectedPrep;

  constructor(private router: Router, private route: ActivatedRoute, private prepService: PrepService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.prepId = (urlParameters['prepId']);
    });
    this.prepService.getPrepById(this.prepId).subscribe(dataLastEmittedFromObserver => {
      this.selectedPrep = new Prep(dataLastEmittedFromObserver.title,
                                            dataLastEmittedFromObserver.about,
                                            dataLastEmittedFromObserver.source)
    })
  }

  deleteThisPrep(){
    this.prepService.deletePrepById(this.prepId);
  }

  goBackToPrepLibrary() {
    this.router.navigate(['prep']);
  }


}
