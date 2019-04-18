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
import { ItemInfoComponent } from './item-info/item-info.component';
import { PrepViewComponent } from './prep-view/prep-view.component';
import { FirstAidComponent } from './first-aid/first-aid.component';
import { NavigationComponent } from './navigation/navigation.component';

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
      path: 'firstAid',
      component: FirstAidComponent
    },
    {
      path: 'navigation',
      component: NavigationComponent
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
      path: 'prep/:prepId',
      component: PrepViewComponent
    },
    {
      path: 'scenarios/:scenarioId',
      component: ScenarioItemsComponent
    },
    {
      path: 'addItem/:scenarioId',
      component: AddItemComponent
    },
    {
      path: 'scenarios/:scenarioId/itemInfo/:itemId',
      component: ItemInfoComponent
    }
  ];

  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
  