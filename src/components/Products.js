import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as R from 'ramda'

import {fetchProducts} from '../actions'
import {getProducts} from '../selectors'

class Products extends Component {
    componentDidMount() {
        this.props.fetchProducts()
    }

    renderProduct(product, index) {
        const shortDescription = `${R.take(60, product.description)}...`

        return (
            <div className='col-sm4 col-lg-4 col-md-4 book-list' key={index}>
                <div className='thumbnail'>
                    <img className='img-thumbnail' src={product.image} alt={product.name} />
                    <div className='caption'>
                        <h4 className='pull-right'>{product.price}</h4>
                        <h4>
                            <Link to={`/products/${product.id}`}>
                                {product.name}
                            </Link>
                        </h4>
                        <p>{shortDescription}</p>
                        <p className='itemButton'>
                            <button className='btn btn-primary'>
                                Buy Now!
                            </button>
                            <Link to={`/products/${product.id}`} className='btn btn-default'>
                                More info
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const {products} = this.props
        console.log('phones', products)
        return (
            <div className='books row'>
                {products.map((product, index) => this.renderProduct(product, index))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: getProducts(state)
})

const mapDispatchToProps = {
    fetchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)