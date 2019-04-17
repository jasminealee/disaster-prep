import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Item } from '../models/item.model';
import { ScenarioService } from '../scenario.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Scenario } from '../models/scenario.model';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-scenario-items',
  templateUrl: './scenario-items.component.html',
  styleUrls: ['./scenario-items.component.css'],
  providers: [ScenarioService, ItemService]
})
export class ScenarioItemsComponent implements OnInit {
  @Output() clickSender = new EventEmitter();

  bag: Item[];
  scenarioId;
  items: FirebaseListObservable<Item[]>;
  selectedScenario;
  newItem;
  prepList: Item[];

  constructor(private route: ActivatedRoute, private scenarioService: ScenarioService, private database: AngularFireDatabase, private router: Router, private itemService: ItemService ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.scenarioId = (urlParameters['scenarioId']); // access to the route and the value of 'id' in the path
    });
    this.items = this.database.list('items', {
      query: {
        orderByChild: 'scenarioId',
        equalTo: this.scenarioId,
      }
    });
    // this.scenarioService.getScenarioById(this.scenarioId).subscribe(dataLastEmittedFromObserver => {
    //   this.selectedScenario = new Scenario(dataLastEmittedFromObserver.title,
    //                                         dataLastEmittedFromObserver.source)
    // })
  }

  createNewItemForScenario(scenarioId) {
    this.router.navigate(['addItem', scenarioId])
  }

  addItemToBag(item) {
    this.bag.push(item);
  }

  addAllToPrepList(bag) {
    this.prepList.push(bag);
  }
}
