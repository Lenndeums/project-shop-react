import * as R from 'ramda'
import { FETCH_PRODUCTS_SUCCESS } from "../constants/actionTypes"

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PRODUCTS_SUCCESS:
            const newValues = R.indexBy(R.prop('id'),payload)
            const test = payload
            console.log('test1 ==>', newValues)
            console.log('test2 ==>', test)
            return R.merge(state, newValues)
    }
    return state
}