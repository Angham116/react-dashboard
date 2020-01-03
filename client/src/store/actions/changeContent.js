export const CHANGE_CONTENT_LOADING = 'CHANGE_CONTENT_LOADING';
export const CHANGE_CONTENT_TEXT = 'CHANGE_CONTENT_TEXT';

export default (content) => async (dispatch) => {
  try {
    dispatch({
      type: CHANGE_CONTENT_LOADING,
    });
    dispatch({
      type: CHANGE_CONTENT_TEXT,
      payload: content,
    });
  } catch (err) {
    console.log(444, err, 'content name is wrong')
  }
};
