import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import CreateAlbum from './pages/CreateAlbum';
import ShowAlbum from './pages/ShowAlbum';
import EditAlbum from './pages/EditAlbum';
import DeleteAlbum from './pages/DeleteAlbum';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/albums/create' element={<CreateAlbum />} />
      <Route path='/albums/details/:id' element={<ShowAlbum />} />
      <Route path='/albums/edit/:id' element={<EditAlbum />} />
      <Route path='/albums/delete/:id' element={<DeleteAlbum />} />
    </Routes>
  );
};

export default App;