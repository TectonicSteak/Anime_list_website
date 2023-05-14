import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Popular from "Popular.jsx";
import AnimePage from "./AnimePage";

const App = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Popular />}/>
                <Route path="/anime/:id" element={<AnimePage />}/>
            </Routes>
        </BrowserRouter>
    )

}

export default App;