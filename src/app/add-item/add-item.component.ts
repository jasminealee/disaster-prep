import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Item } from '../models/item.model';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  providers: [ItemService]
})
export class AddItemComponent implements OnInit {
  scenarioId;
  newItem;
  source = null;

  constructor(private route: ActivatedRoute, private itemService: ItemService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.scenarioId = (urlParameters['scenarioId']); // access to the route and the value of 'id' in the path
    });
  }

  submitForm(newTitle, newAbout) {
    this.newItem = new Item(newTitle, newAbout, this.scenarioId, this.source);
    this.itemService.addItem(this.newItem);
  }

  goBackToScenarioItems() {
    this.router.navigate(['scenarios', this.scenarioId])
  }
}
