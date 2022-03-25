import { environment } from '@env/environment';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export const reducers: ActionReducerMap<RootState> = {};

export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];

export interface RootState {}
