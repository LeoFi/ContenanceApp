import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as firebase from 'firebase';

//
// Initial State...
//

const initialState = {
    favoriteAnimal: "duck",
    personData: {},
    isCodeTrue: {},
};

//
// Reducer...
//

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "setFavoriteAnimal":
            return { ...state, favoriteAnimal: action.value };

        case "checkCode":
            return { ...state, isCodeTrue: action.value };


        case "setPersonData":
            return { ...state, personData: action.value };

        default:
            return state;
    }
};

//
// Store...
//

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };

//
// Action Creators...
//

const setFavoriteAnimal = (favoriteAnimal) => {
    return {
        type: "setFavoriteAnimal",
        value: favoriteAnimal,
    };
}

const checkCode = (isCodeTrue) => {
    return {
        type: "checkCode",
        value: isCodeTrue,
    };
}

const setPersonData = (personData) => {
    return {
        type: "setPersonData",
        value: personData,
    };
}

const watchPersonData = () => {
    return function (dispatch) {
        firebase.database().ref("codes").on("value", function (snapshot) {
            var personData = snapshot.val();
            dispatch(setPersonData(personData));
        }, function (error) {
            //throw error
        });
    };
}

const watchcheckCode = () => {
    return function (dispatch) {
        firebase.database().ref("codes").on("value", function (snapshot) {
            var personData = snapshot.val();
            dispatch(checkCode(personData));
        }, function (error) {
            //throw error
        });
    };
}


export { setFavoriteAnimal, checkCode, watchcheckCode, setPersonData, watchPersonData };