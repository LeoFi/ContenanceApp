export const UPDATE_NICKNAME = 'UPDATE_NICKNAME';
export const UPDATE_STARTING_DATE = 'UPDATE_STARTING_DATE';

export const updateNickname = nickname => ({
  type: UPDATE_NICKNAME,
  nickname,
});

export const updateStartingDate = starting_date => ({
  type: UPDATE_STARTING_DATE,
  starting_date,
});

const initialState = {
    nickname: '',
    starting_date: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NICKNAME:
      return {
        ...state,
        nickname: action.nickname,
      };
      case UPDATE_STARTING_DATE:
      return {
        ...state,
        starting_date: action.starting_date,
      };
    default:
      return state;
  }
};