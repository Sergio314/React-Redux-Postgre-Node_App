import {put} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import * as api from '../../api/index'

export function* getProductsSaga(action) {
    try{
        const {data} = yield api.readProducts(action.data);

        /// add amount here to each object
        for (const item of data){
            item.amount = 1;
        }

        yield put({type: ACTION.GET_PRODUCTS_SUCCESS, data});
    } catch (err) {
        yield put({type: ACTION.GET_PRODUCTS_ERROR, error:err.response});
    }
}





