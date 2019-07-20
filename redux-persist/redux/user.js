export const UPDATE_NICKNAME = 'UPDATE_NICKNAME';
export const UPDATE_STARTING_DATE = 'UPDATE_STARTING_DATE';

export const updateNickname = nickname => ({
  type: UPDATE_NICKNAME,
  nickname,
});

export const updateStartingDate = initialDate => ({
  type: UPDATE_STARTING_DATE,
  initialDate,
});

const initialState = {
    nickname: '',
    initialDate: ''
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
        initialDate: action.initialDate,
      };
    default:
      return state;
  }
};