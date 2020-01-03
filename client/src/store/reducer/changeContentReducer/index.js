import {
  CHANGE_CONTENT_LOADING,
  CHANGE_CONTENT_TEXT,
} from '../../actions/changeContent';

const initialState = {
  loading: false,
  content: 'Dashboard'
};

export default (state = initialState, action) => {
  switch(action.type){
    case CHANGE_CONTENT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CHANGE_CONTENT_TEXT:
      return {
        ...state,
        loading: false,
        content: action.payload
      };
    default:
      return state;
  }
}
