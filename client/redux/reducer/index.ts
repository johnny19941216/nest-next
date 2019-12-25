import { combineReducers } from 'redux';

import characterReducer, { ICharacterState } from './character';

export interface IRootState {
  character: ICharacterState;
}

export default combineReducers({
  character: characterReducer,
});
