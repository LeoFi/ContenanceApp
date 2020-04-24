import { combineReducers } from 'redux';

import user from './user';
import exercices from './exercices';
import user_values from './user_values';

export default combineReducers({
    user,
    exercices,
    user_values
});