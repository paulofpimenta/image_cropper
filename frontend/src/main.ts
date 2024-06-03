import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app/app.module';

import { provideRouter } from '@angular/router';
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { provideAnimations } from '@angular/platform-browser/animations';

import routeConfig from './routes';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent,
  {
    providers: [
    provideProtractorTestingSupport(),
    provideRouter(routeConfig),
    provideAnimations(),
    importProvidersFrom(HttpClientModule)
]
  }
).catch(err => console.error(err));
