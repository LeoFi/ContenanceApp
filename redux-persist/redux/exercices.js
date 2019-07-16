export const UPDATE_State_Exe1 = "UPDATE_State_Exe1";
export const UPDATE_State_Exe2 = "UPDATE_State_Exe2";
export const UPDATE_State_Exe3 = "UPDATE_State_Exe3";

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

const initialState = {
  exercice_state_1: "",
  exercice_state_2: "",
  exercice_state_3: ""
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
    default:
      return state;
  }
};
