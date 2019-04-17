import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { EmergencyPromptComponent } from './emergency-prompt/emergency-prompt.component';
import { ScenariosComponent } from './scenarios/scenarios.component';
import { AdminComponent } from './admin/admin.component';
import { EmergencyInfoComponent } from './emergency-info/emergency-info.component';
import { ScenarioItemsComponent } from './scenario-items/scenario-items.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    EmergencyPromptComponent,
    ScenariosComponent,
    AdminComponent,
    EmergencyInfoComponent,
    ScenarioItemsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
