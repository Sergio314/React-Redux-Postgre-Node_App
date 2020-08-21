import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import productReducer from "./productReducer";

const appReducer=combineReducers({
    form: formReducer,
    productsStore: productReducer
});

export default appReducer;
