
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Home } from './Home'
import { SobreNosotros } from './SobreNosotros'
import { Tasks } from './Tasks'

export function Menu(){
    return (
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/tasks">Tasks</Link>
                </li>
              </ul>
            </nav>
    
            <Routes>
              <Route path="/" element={
                <Home/>
              } />
              <Route path="/about" element={
                <SobreNosotros/>
              } />
              <Route path="/tasks" element={
                <Tasks/>
              } />
            </Routes>
          </div>
        </BrowserRouter>
      );
};