import { NgModule } from '@angular/core';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from '@store/root-state';

/**
 * lazy load modules should be imported at the feature module
 * */
@NgModule({
	declarations: [],
	imports: [
		StoreModule.forRoot(reducers, { metaReducers }),
		EffectsModule.forRoot([]),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
	],
})
export class RootStoreModule {}
