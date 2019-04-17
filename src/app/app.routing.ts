import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { EmergencyPromptComponent } from './emergency-prompt/emergency-prompt.component';
import { EmergencyInfoComponent } from './emergency-info/emergency-info.component';
import { ScenariosComponent } from './scenarios/scenarios.component';
import { ScenarioItemsComponent } from './scenario-items/scenario-items.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SurvivalComponent } from './survival/survival.component';
import { PrepComponent } from './prep/prep.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AddScenarioComponent } from './add-scenario/add-scenario.component';



const appRoutes: Routes = [
    {
      path: '',
      component: SplashPageComponent
    },
    {
      path: 'emergencyPrompt',
      component: EmergencyPromptComponent
    },
    {
      path: 'emergencyInfo',
      component: EmergencyInfoComponent
    },
    {
      path: 'mainMenu',
      component: MainMenuComponent
    },
    {
      path: 'scenarios',
      component: ScenariosComponent
    },
    {
      path: 'addScenario',
      component: AddScenarioComponent
    },
    {
      path: 'survival',
      component: SurvivalComponent
    },
    {
      path: 'prep',
      component: PrepComponent
    },
    {
      path: 'scenarios/:scenarioId',
      component: ScenarioItemsComponent
    },
    {
      path: 'addItem/:scenarioId',
      component: AddItemComponent
    }
  ];
  
  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
  