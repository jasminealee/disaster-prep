import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Item } from '../models/item.model';
import { ItemService } from '../item.service';
import { PrepService } from '../prep.service';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';
import { Prep } from '../models/prep.model';


@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css'],
  providers: [ItemService, PrepService]
})
export class ItemInfoComponent implements OnInit {
  // @Output() clickSender = new EventEmitter();

  scenarioId
  itemId;
  newPrepItem;
  selectedItem;
  currentRoute;
  prepSource = null;

  // add to firebase list of preps with the same properties


  constructor(private route: ActivatedRoute, private itemService: ItemService, private router: Router, private prepService: PrepService) { }

  ngOnInit() {
    this.currentRoute = this.router.url;
    this.route.params.forEach((urlParameters) => {
      this.scenarioId = (urlParameters['scenarioId']); // access to the route and the value of 'id' in the path
      this.itemId = (urlParameters['itemId']);
    });
    this.itemService.getItemById(this.itemId).subscribe(dataLastEmittedFromObserver => {
      this.selectedItem = new Item(dataLastEmittedFromObserver.title,
                                            dataLastEmittedFromObserver.about,
                                            dataLastEmittedFromObserver.scenarioId,
                                            dataLastEmittedFromObserver.source)
                                            console.log(this.selectedItem);
    })
  }

  addItemToPrepList() {
    this.newPrepItem = new Prep(this.selectedItem.title, this.selectedItem.about, this.prepSource);
    this.prepService.addPreps(this.newPrepItem);
  }

  goBackToScenarioItems() {
    this.router.navigate(['scenarios', this.scenarioId]);
  }

  beginDeletingThisItem() {
    this.itemService.deleteItemById(this.itemId);
  }
}
