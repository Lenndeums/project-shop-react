import React from 'react'
import {Switch, Route} from 'react-router'

import Products from './Products'

const routes = (
    <Switch>
        <Route path='/' component={Products} exact />
    </Switch>
)

const Layout = () => (
    <div className='view-container'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    Sidebar
                </div>
                <div className='col-md-9'>
                    {routes}
                </div>
            </div>
        </div>
    </div>
)

export default Layout