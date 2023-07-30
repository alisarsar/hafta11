import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const AnaKomponent = ()=>{
    const [goster, gosterGuncelle] = useState(true)

    return goster && <App />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AnaKomponent />
)