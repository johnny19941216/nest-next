import { interval, of } from 'rxjs';
import { takeUntil, mergeMap, catchError, map } from 'rxjs/operators';
import { combineEpics, ofType, Epic } from 'redux-observable';
import { request } from 'universal-rxjs-ajax'; // because standard AjaxObservable only works in browser
import { ActionType, isActionOf } from 'typesafe-actions';

import actions from '../actions';
import types from '../action-types';

type Action = ActionType<typeof actions>;

export const fetchUserEpic: Epic<Action, Action> = (action$, state$) =>
  action$.pipe(
    ofType(types.START_FETCHING_CHARACTERS),

    mergeMap(action => {
      return interval(3000).pipe(
        map(x => actions.fetchCharacter()),
        takeUntil(
          action$.ofType(
            types.STOP_FETCHING_CHARACTERS,
            types.FETCH_CHARACTER_FAILURE,
          ),
        ),
      );
    }),
  );

export const fetchCharacterEpic: Epic<Action, Action> = (action$, state$) =>
  action$.pipe(
    ofType(types.FETCH_CHARACTER),
    mergeMap(action =>
      request({
        url: `https://swapi.co/api/people/${state$.value.nextCharacterId}`,
      }).pipe(
        map(response => actions.fetchCharacterSuccess(response.response)),
        catchError(error =>
          of(actions.fetchCharacterFailure(error.xhr.response)),
        ),
      ),
    ),
  );

export default combineEpics(fetchUserEpic, fetchCharacterEpic);
