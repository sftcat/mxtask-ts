import React, { FC } from 'react'
import ProductList from '../../features/product/ProductList'
import Footer from '../../features/footer/Footer'
import Header from '../../features/header/Header'

const Main: FC = () => {
    return (
        <>
            <Header />
            <ProductList />
            <Footer />
        </>
    )
}

export default Main