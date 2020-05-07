import * as R from 'ramda'

const getProductsById = (state, id) => R.prop(id, state.products)

export const getProducts = state => {
    const products = R.map(id => getProductsById(state, id), state.productsPage.ids)
    return products
}