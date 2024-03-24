import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './components/Home';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>

        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
  )
}

export default App
