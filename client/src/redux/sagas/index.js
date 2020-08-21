import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import {getProductsSaga} from './productsSaga';

export default function* rootSaga() {
    yield takeLatest(ACTION.GET_PRODUCTS, getProductsSaga);
}
