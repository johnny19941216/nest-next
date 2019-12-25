import { createAction } from 'typesafe-actions';
import { ICharacterResponse } from '../../../global/types/character';

import {
  START_FETCHING_CHARACTERS,
  STOP_FETCHING_CHARACTERS,
  FETCH_CHARACTER,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE,
} from '../action-types/character';

export const startFetchingCharacters = createAction(
  START_FETCHING_CHARACTERS,
)();

export const stopFetchingCharacters = createAction(STOP_FETCHING_CHARACTERS);

export const fetchCharacter = createAction(FETCH_CHARACTER)();

export const fetchCharacterSuccess = createAction(FETCH_CHARACTER_SUCCESS)<{
  response: ICharacterResponse;
}>();

export const fetchCharacterFailure = createAction(FETCH_CHARACTER_FAILURE)<{
  error: string;
}>();
