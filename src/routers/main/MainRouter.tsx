import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { mainRoutes } from './mainRoutes'

const MainRouter: FC = () => {
    return (
        <>
            <Routes>
                {mainRoutes.map((route) => <Route key={route.path} path={route.path} element={<route.element/>}/>)}
            </Routes>
        </>
    )
}

export default MainRouter