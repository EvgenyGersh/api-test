import React from 'react';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Header from '../widgets/header/Header';
import Footer from '../widgets/footer/Footer'
import {CatalogPage, GenresPage} from '../pages'



import './app.scss';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes> 
          <Route path="/" element={<CatalogPage/>}/>
          <Route path="/genres" element={<GenresPage/>}/>
          {/* <Route path="/singleId" element={<SinglePage/>}/> */}
        </Routes>
        <Footer/>
      </div>
     </BrowserRouter> 
  );
}

export default App;
