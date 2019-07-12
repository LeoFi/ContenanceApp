import { combineReducers } from 'redux';

import user from './user';
import exercices from './exercices';

export default combineReducers({
    user,
    exercices
});