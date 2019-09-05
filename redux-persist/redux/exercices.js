export const UPDATE_State_Exe1 = "UPDATE_State_Exe1";
export const UPDATE_State_Exe2 = "UPDATE_State_Exe2";
export const UPDATE_State_Exe3 = "UPDATE_State_Exe3";
export const UPDATE_State_Exe4 = "UPDATE_State_Exe4";
export const UPDATE_State_Exe5 = "UPDATE_State_Exe5";
export const UPDATE_State_Exe6 = "UPDATE_State_Exe6";
export const UPDATE_State_Exe7 = "UPDATE_State_Exe7";
export const UPDATE_State_Exe8 = "UPDATE_State_Exe8";
export const UPDATE_State_Exe9 = "UPDATE_State_Exe9";
export const UPDATE_State_Exe10 = "UPDATE_State_Exe10";
export const UPDATE_State_Exe11 = "UPDATE_State_Exe11";
export const UPDATE_State_Exe12 = "UPDATE_State_Exe12";
export const UPDATE_State_Exe13 = "UPDATE_State_Exe13";
export const UPDATE_State_Exe14 = "UPDATE_State_Exe14";
export const UPDATE_State_Exe15 = "UPDATE_State_Exe15";
export const UPDATE_State_Exe16 = "UPDATE_State_Exe16";
export const UPDATE_State_Exe17 = "UPDATE_State_Exe17";
export const UPDATE_State_Exe18 = "UPDATE_State_Exe18";
export const UPDATE_State_Exe19 = "UPDATE_State_Exe19";
export const UPDATE_State_Exe20 = "UPDATE_State_Exe20";
export const UPDATE_State_Exe21 = "UPDATE_State_Exe21";

export const updateState_Ex1 = exercice_state_1 => ({
  type: UPDATE_State_Exe1,
  exercice_state_1
});

export const updateState_Ex2 = exercice_state_2 => ({
  type: UPDATE_State_Exe2,
  exercice_state_2
});

export const updateState_Ex3 = exercice_state_3 => ({
  type: UPDATE_State_Exe3,
  exercice_state_3
});

export const updateState_Ex4 = exercice_state_4 => ({
  type: UPDATE_State_Exe4,
  exercice_state_4
});

export const updateState_Ex5 = exercice_state_5 => ({
  type: UPDATE_State_Exe5,
  exercice_state_5
});

export const updateState_Ex6 = exercice_state_6 => ({
  type: UPDATE_State_Exe6,
  exercice_state_6
});

export const updateState_Ex7 = exercice_state_7 => ({
  type: UPDATE_State_Exe7,
  exercice_state_7
});

export const updateState_Ex8 = exercice_state_8 => ({
  type: UPDATE_State_Exe8,
  exercice_state_8
});

export const updateState_Ex9 = exercice_state_9 => ({
  type: UPDATE_State_Exe9,
  exercice_state_9
});

export const updateState_Ex10 = exercice_state_10 => ({
  type: UPDATE_State_Exe10,
  exercice_state_10
});

export const updateState_Ex11 = exercice_state_11 => ({
  type: UPDATE_State_Exe11,
  exercice_state_11
});

export const updateState_Ex12 = exercice_state_12 => ({
  type: UPDATE_State_Exe12,
  exercice_state_12
});

export const updateState_Ex13 = exercice_state_13 => ({
  type: UPDATE_State_Exe13,
  exercice_state_13
});

export const updateState_Ex14 = exercice_state_14 => ({
  type: UPDATE_State_Exe14,
  exercice_state_14
});

export const updateState_Ex15 = exercice_state_15 => ({
  type: UPDATE_State_Exe15,
  exercice_state_15
});

export const updateState_Ex16 = exercice_state_16 => ({
  type: UPDATE_State_Exe16,
  exercice_state_16
});

export const updateState_Ex17 = exercice_state_17 => ({
  type: UPDATE_State_Exe17,
  exercice_state_17
});

export const updateState_Ex18 = exercice_state_18 => ({
  type: UPDATE_State_Exe18,
  exercice_state_18
});

export const updateState_Ex19 = exercice_state_19 => ({
  type: UPDATE_State_Exe19,
  exercice_state_19
});

export const updateState_Ex20 = exercice_state_20 => ({
  type: UPDATE_State_Exe20,
  exercice_state_20
});

export const updateState_Ex21 = exercice_state_21 => ({
  type: UPDATE_State_Exe21,
  exercice_state_21
});

const initialState = {
  exercice_state_1: "next",
  exercice_state_2: undefined,
  exercice_state_3: undefined,
  exercice_state_4: undefined,
  exercice_state_6: undefined,
  exercice_state_7: undefined,
  exercice_state_8: undefined,
  exercice_state_9: undefined,
  exercice_state_10: undefined,
  exercice_state_11: undefined,
  exercice_state_12: undefined,
  exercice_state_13: undefined,
  exercice_state_14: undefined,
  exercice_state_16: undefined,
  exercice_state_17: undefined,
  exercice_state_18: undefined,
  exercice_state_19: undefined,
  exercice_state_20: undefined,
  exercice_state_21: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_State_Exe1:
      return {
        ...state,
        exercice_state_1: action.exercice_state_1
      };
    case UPDATE_State_Exe2:
      return {
        ...state,
        exercice_state_2: action.exercice_state_2
      };
    case UPDATE_State_Exe3:
      return {
        ...state,
        exercice_state_3: action.exercice_state_3
      };
    case UPDATE_State_Exe4:
      return {
        ...state,
        exercice_state_4: action.exercice_state_4
      };
      case UPDATE_State_Exe5:
      return {
        ...state,
        exercice_state_5: action.exercice_state_5
      };
      case UPDATE_State_Exe6:
      return {
        ...state,
        exercice_state_6: action.exercice_state_6
      };
      case UPDATE_State_Exe7:
      return {
        ...state,
        exercice_state_7: action.exercice_state_7
      };
      case UPDATE_State_Exe8:
      return {
        ...state,
        exercice_state_8: action.exercice_state_8
      };
      case UPDATE_State_Exe9:
      return {
        ...state,
        exercice_state_9: action.exercice_state_9
      };
      case UPDATE_State_Exe10:
      return {
        ...state,
        exercice_state_10: action.exercice_state_10
      };
      case UPDATE_State_Exe11:
      return {
        ...state,
        exercice_state_11: action.exercice_state_11
      };
      case UPDATE_State_Exe12:
      return {
        ...state,
        exercice_state_12: action.exercice_state_12
      };
      case UPDATE_State_Exe13:
      return {
        ...state,
        exercice_state_13: action.exercice_state_13
      };
      case UPDATE_State_Exe14:
      return {
        ...state,
        exercice_state_14: action.exercice_state_14
      };
      case UPDATE_State_Exe15:
      return {
        ...state,
        exercice_state_15: action.exercice_state_15
      };
      case UPDATE_State_Exe16:
      return {
        ...state,
        exercice_state_16: action.exercice_state_16
      };
      case UPDATE_State_Exe17:
      return {
        ...state,
        exercice_state_17: action.exercice_state_17
      };
      case UPDATE_State_Exe18:
      return {
        ...state,
        exercice_state_18: action.exercice_state_18
      };
      case UPDATE_State_Exe19:
      return {
        ...state,
        exercice_state_19: action.exercice_state_19
      };
      case UPDATE_State_Exe20:
      return {
        ...state,
        exercice_state_20: action.exercice_state_20
      };
      case UPDATE_State_Exe21:
      return {
        ...state,
        exercice_state_21: action.exercice_state_21
      };
    default:
      return state;
  }
};
