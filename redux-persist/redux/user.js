export const UPDATE_NICKNAME = 'UPDATE_NICKNAME';
export const UPDATE_AGE = 'UPDATE_AGE';
export const UPDATE_STARTING_DATE = 'UPDATE_STARTING_DATE';
export const UPDATE_ACCESS_CODE = 'UPDATE_ACCESS_CODE';
export const UPDATE_ONBOARDING_DONE = 'UPDATE_ONBOARDING_DONE';
export const UPDATE_WELCOME_TITLE = 'UPDATE_WELCOME_TITLE';
export const UPDATE_WELCOME_SUBTITLE = 'UPDATE_WELCOME_SUBTITLE';
export const UPDATE_TOTAL_CHALLENGE = 'UPDATE_TOTAL_CHALLENGE';
export const UPDATE_COMPLETED_LIST = 'UPDATE_COMPLETED_LIST';
export const UPDATE_UID = 'UPDATE_UID';
export const UPDATE_ALLEXERCISES = 'UPDATE_ALLEXERCISES';

export const updateNickname = nickname => ({
  type: UPDATE_NICKNAME,
  nickname,
});

export const updateAge = age => ({
  type: UPDATE_AGE,
  age,
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

export const updateWelcomeTitle = welcomeTitle => ({
  type: UPDATE_WELCOME_TITLE,
  welcomeTitle,
});

export const updateWelcomeSubTitle = welcomeSubTitle => ({
  type: UPDATE_WELCOME_SUBTITLE,
  welcomeSubTitle,
});

export const updateTotalChallenge = totalChallenge => ({
  type: UPDATE_TOTAL_CHALLENGE,
  totalChallenge,
});

export const updateCompletedList = isCompletedList => ({
  type: UPDATE_COMPLETED_LIST,
  isCompletedList,
});

export const updateUID = UID => ({
  type: UPDATE_UID,
  UID,
});

export const updateAllExercises = allExercises => ({
  type: UPDATE_ALLEXERCISES,
  allExercises,
});

const initialState = {
    nickname: undefined,
    age: undefined,
    initialDate: '',
    accessCode: undefined,
    onboardingDone: false,
    welcomeTitle: '',
    welcomeSubTitle: '',
    totalChallenge: undefined,
    isCompletedList: false,
    UID: undefined,
    allExercises: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NICKNAME:
      return {
        ...state,
        nickname: action.nickname,
      };
      case UPDATE_AGE:
      return {
        ...state,
        age: action.age,
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
      case UPDATE_WELCOME_TITLE:
      return {
        ...state,
        welcomeTitle: action.welcomeTitle,
      };
      case UPDATE_WELCOME_SUBTITLE:
      return {
        ...state,
        welcomeSubTitle: action.welcomeSubTitle,
      };
      case UPDATE_TOTAL_CHALLENGE:
      return {
        ...state,
        totalChallenge: action.totalChallenge,
      };
      case UPDATE_COMPLETED_LIST:
      return {
        ...state,
        isCompletedList: action.isCompletedList,
      };
      case UPDATE_UID:
      return {
        ...state,
        UID: action.UID,
      };
      case UPDATE_ALLEXERCISES:
      return {
        ...state,
        allExercises: action.allExercises,
      };
    default:
      return state;
  }
};