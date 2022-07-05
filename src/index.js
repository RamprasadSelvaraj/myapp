import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './Home';
import Courses from './Courses';
import HOC from './HOC';
import ConditionalComp from './ConditionalComp';
import AxiosDemo from './AxiosDemo';

ReactDOM.render(
  <BrowserRouter>
  <div>
    <Routes>
      {/* Define the routes */}
      <Route path="/" element={<App/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Courses" element={<Courses/>}/>
      <Route path="/HOC" element={<HOC/>}/>
      <Route path="/ConditionalComp" element={<ConditionalComp/>}/>
      <Route path="/AxiosDemo" element={<AxiosDemo/>}/>
    </Routes>
  </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// <React.StrictMode>
//     <App />
//   </React.StrictMode>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
