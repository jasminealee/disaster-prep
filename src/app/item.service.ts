import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Item } from './models/item.model';

@Injectable()
export class ItemService {
  items: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase, private router: Router) { 
    this.items = database.list('items');
  }

  getItems() {
    return this.items;
  }

  addItem(newItem: Item){
    this.items.push(newItem);
  }

  getItemById(itemId: string) {
    return this.database.object('items/' + itemId);
  }

}
