import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Library from './Component/Library/Library';
import Network from './Component/Network/Network';
import Header from './Component/Header/Header';
import Hadith from './Component/Home/Hadith';
import Prayers from './Component/Library/Prayers';

import './App.css';

function App() {
  return (
    
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
              <Route index element={<Home/>}/>
              <Route path='/home' element={<Home />} />
              <Route path='/library' element={<Library/>}/>
              <Route path='/network' element={<Network/>}/>
              <Route path='/hadith' element= {<Hadith/>}/>
              <Route path='/Prayers' element= {<Prayers/>}/>
          </Routes>
        </BrowserRouter>
        
      </div>
  );
}

export default App;
