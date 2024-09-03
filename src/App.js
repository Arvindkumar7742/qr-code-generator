import { useState } from 'react';
import './App.css';
import generateQrCode from './utils/qrcode';

function App() {
  const [inputText, setInputText] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const clickHandler = async () => {
    try{
      const qrcodeURL = await generateQrCode(inputText);

      //set the image url
      setImgUrl(qrcodeURL);
    }catch(error){
      console.log("QR code generating error:",error);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1>QR Code Generator</h1>
        <div className="input-group">
          <input
            type='text'
            placeholder="Enter text to generate QR code"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={clickHandler}>Generate QR</button>
        </div>
        {imgUrl && (
          <div className="qr-container">
            <img src={imgUrl} alt="Generated QR Code" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
