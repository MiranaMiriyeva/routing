import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import List from './pages/List'
import Add from './pages/Add'
import Detail from './pages/Detail'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list' element={<List />} />
        <Route path='/add' element={<Add />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </>
  )
}

export default App