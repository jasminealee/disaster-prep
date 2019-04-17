import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Item } from '../models/item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  providers: [ItemService]
})
export class AddItemComponent implements OnInit {
  scenarioId;
  newItem;
  source;

  constructor(private route: ActivatedRoute, private itemService: ItemService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.scenarioId = (urlParameters['scenarioId']); // access to the route and the value of 'id' in the path
    });
  }

  submitForm(newTitle) {
    this.newItem = new Item(newTitle, this.scenarioId, this.source)
    this.itemService.addItem(this.newItem);
  }

}
