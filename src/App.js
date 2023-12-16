import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './components/RootLayOut'
import NotFound from './pages/NotFound'
import About from './pages/About'
import HomePage from './pages/HomePage'


const App = () => {


  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayOut />} >
          <Route index element={<HomePage />} />
          <Route path='About' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Route>

      </Routes>

    </>
  )
}

export default App
