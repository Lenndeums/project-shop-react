import phones from './mockPhones'

export const fetchProducts = async () => {
    return new Promise(resolve => {
        resolve(phones)
    })
}