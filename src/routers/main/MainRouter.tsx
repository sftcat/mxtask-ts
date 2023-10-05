import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductList from '../../common/product/ProductList'
import NotFound from '../404/NotFound'

const MainRouter: FC = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<ProductList/>} />
                <Route element={<NotFound />} path='*' />
            </Routes>
        </>
    )
}

export default MainRouter