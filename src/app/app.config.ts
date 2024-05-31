import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { RootFeatureKey, rootReducer } from './_/store/root-store';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(),
        provideStore(),
        provideState({ name: RootFeatureKey, reducer: rootReducer }),
        provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
    ]
};
