import React, { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
const [show,setShow]=useState(false)  
const handleClick=(e)=>{
  setShow(true);
}

  return (
    <div className="App"> 
      <h1>QR Code Generator</h1>
      <div>
        <input
          type="url"
          name="qr-code"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleClick}>Generate</button>
      </div>
      {show && url && (
        <div className="qr-code">
         <img
            src={`https://qrcode.tec-it.com/API/QRCode?data=${url}`}
            alt="QR Code"
          />
        </div>
      )}
    </div>
  );
}

export default App;
