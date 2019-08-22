import Onboarding from "react-native-onboarding-swiper";

export const UPDATE_NICKNAME = 'UPDATE_NICKNAME';
export const UPDATE_STARTING_DATE = 'UPDATE_STARTING_DATE';
export const UPDATE_ACCESS_CODE = 'UPDATE_ACCESS_CODE';
export const UPDATE_ONBOARDING_DONE = 'UPDATE_ONBOARDING_DONE';

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

export const updateOnboarding = onboardingDone => ({
  type: UPDATE_ONBOARDING_DONE,
  onboardingDone,
});

const initialState = {
    nickname: '',
    initialDate: '',
    accessCode: undefined,
    onboardingDone: false
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
      case UPDATE_ONBOARDING_DONE:
      return {
        ...state,
        onboardingDone: action.onboardingDone,
      };
    default:
      return state;
  }
};