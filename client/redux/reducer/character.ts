import { ActionType, getType } from 'typesafe-actions';
import { ICharacter } from '../../../global/types/index';
import { produce } from 'immer';

import * as actions from '../actions/character';
import * as actionTypes from '../action-types/character';

type Action = ActionType<typeof actions>;

export interface ICharacterState {
  count: number;
  characters: ICharacter[];
  isLoding: boolean;
  pageSize: number;
  page: number;
  error: string;
}

const initialState: ICharacterState = {
  count: 0,
  characters: [],
  isLoding: false,
  pageSize: 20,
  page: 1,
  error: '',
};

export default produce(
  (draft: ICharacterState = initialState, action: Action) => {
    switch (action.type) {
      case actionTypes.FETCH_CHARACTER_SUCCESS:
        draft.count = action.payload.response.info.count;
        draft.characters = action.payload.response.results;
        break;
      case actionTypes.FETCH_CHARACTER_FAILURE:
        draft.error = action.payload.error;
    }

    return draft;
  },
);
