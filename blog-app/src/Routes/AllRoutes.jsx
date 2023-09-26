import React from 'react'
import { Route, Routes } from "react-router-dom";
import Homepage from '../Pages/Homepage';
import Blog from '../Pages/Blog';
import About from '../Pages/About';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/post/:id" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
