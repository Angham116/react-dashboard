import { combineReducers } from 'redux';

import changeContentReducer from './changeContentReducer';

export default combineReducers({
  changeContent: changeContentReducer,
});
