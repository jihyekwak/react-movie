import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
    return (
    <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/movie/:id" element={<Detail />} ></Route>
    </Routes>
    )
    
}

export default App;
