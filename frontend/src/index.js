import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import necessary components


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/login';
import Register from './pages/register';
import Chat from './pages/chat';

// importing css stylesheet to use the bootstrap class
import 'bootstrap/dist/css/bootstrap.min.css'; //add this line only in this file

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  // <Router>
  //   <Routes path="/" exact component={App} /> {/* Main page */}
  //   <Routes path="/login" component={Login} /> {/* Other page */}
  // </Router>,

  <Router>
    <Routes>
      <Route path="/" element={<App />} /> {/* Main page */}
      <Route path="/login" element={<Login />} /> {/* Other page */}
      <Route path="/register" element={<Register />} /> 
      <Route path="/chat" element={<Chat />} /> 
    </Routes>
  </Router>,
  document.getElementById('root')


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

