import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { EmergencyPromptComponent } from './emergency-prompt/emergency-prompt.component';

const appRoutes: Routes = [
    {
      path: '',
      component: SplashPageComponent
    },
    {
        path: 'emergencyPrompt',
        component: EmergencyPromptComponent
    }
  ];
  
  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
  