import * as R from 'ramda'
import { FETCH_PRODUCTS_SUCCESS } from '../constants/actionTypes'

const initialState = {
    ids: []
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PRODUCTS_SUCCESS:
            return R.merge(state, {
                ids: R.pluck('id', payload)
            }) 
        default:
            return state;
    }
}