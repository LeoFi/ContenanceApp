export const UPDATE_NICKNAME = 'UPDATE_NICKNAME';
export const UPDATE_STARTING_DATE = 'UPDATE_STARTING_DATE';
export const UPDATE_ACCESS_CODE = 'UPDATE_ACCESS_CODE';

export const updateNickname = nickname => ({
  type: UPDATE_NICKNAME,
  nickname,
});

export const updateStartingDate = initialDate => ({
  type: UPDATE_STARTING_DATE,
  initialDate,
});

export const updateAccessCode = accessCode => ({
  type: UPDATE_ACCESS_CODE,
  accessCode,
});

const initialState = {
    nickname: '',
    initialDate: '',
    accessCode: undefined
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
      case UPDATE_ACCESS_CODE:
      return {
        ...state,
        accessCode: action.accessCode,
      };
    default:
      return state;
  }
};