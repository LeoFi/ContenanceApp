export const UPDATE_NICKNAME = 'UPDATE_NICKNAME';

export const updateNickname = nickname => ({
  type: UPDATE_NICKNAME,
  nickname,
});

const initialState = {
    nickname: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NICKNAME:
      return {
        ...state,
        nickname: action.nickname,
      };
    default:
      return state;
  }
};