import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { EmergencyPromptComponent } from './emergency-prompt/emergency-prompt.component';
import { EmergencyInfoComponent } from './emergency-info/emergency-info.component';
import { ScenariosComponent } from './scenarios/scenarios.component';
import { ScenarioItemsComponent } from './scenario-items/scenario-items.component';



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
      path: 'scenarios',
      component: ScenariosComponent
    },
    {
      path: 'scenarios/:scenarioId',
      component: ScenarioItemsComponent
    }
  ];
  
  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
  