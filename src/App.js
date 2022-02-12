import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
    return (
    <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} ></Route>
        <Route path="/movie/:id" element={<Detail />} ></Route>
    </Routes>
    )
    
}

export default App;
