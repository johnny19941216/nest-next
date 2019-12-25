import { combineEpics } from 'redux-observable';

import characterEpics from './character';

export default combineEpics(characterEpics);
