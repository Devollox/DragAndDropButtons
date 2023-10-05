import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/global.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
    root.render(
        <React.StrictMode>
            <Navbar/>
            <App/>
        </React.StrictMode>
    );
}, 0)


reportWebVitals();
