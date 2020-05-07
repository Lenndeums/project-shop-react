import {
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
} from '../constants/actionTypes'
import { fetchProducts as fetchProductsApi} from '../api'

export const fetchProducts = () => async dispatch => {
    try {
        dispatch({type: FETCH_PRODUCTS_START})

        const products = await fetchProductsApi()

        dispatch({
            type: FETCH_PRODUCTS_SUCCESS,
            payload: products
        })
    } catch (error) {
        dispatch({
            type: FETCH_PRODUCTS_FAILURE,
            payload: error,
            error: true
        })
    }
}