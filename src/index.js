import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import store1 from './store1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<Provider store={(store1)}>
<App />
</Provider>


   
);

