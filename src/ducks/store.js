import {createStore} from 'redux';

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    image: '',
    mortgage: 0,
    rent:0
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const UPDATE_CITY = "UPDATE_CITY";
export const UPDATE_STATE = "UPDATE_STATE";
export const UPDATE_ZIP = "UPDATE_ZIP";
export const UPDATE_IMAGE = "UPDATE_IMAGE";
export const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
export const UPDATE_RENT = "UPDATE_RENT"
export const CANCEL_HOUSE = "CANCEL_HOUSE"

function reducer(state = initialState, action){
    const {type, payload} = action;
    switch (type) {
        case UPDATE_NAME:
            return{...state, name: payload};
        
        case UPDATE_ADDRESS:
            return{...state, address: payload};
        
        case UPDATE_CITY:
            return{...state, city: payload};

        case UPDATE_STATE:
            return{...state, state: payload};

        case UPDATE_ZIP:
            return{...state, zip: payload};

        case UPDATE_IMAGE:
            return{...state, image: payload}
        
        case UPDATE_MORTGAGE:
            return{...state, mortgage: payload}

        case UPDATE_RENT:
            return{...state, rent: payload}

        case CANCEL_HOUSE:
            return initialState
        default: 
            return state;
    }
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())