import { useState, useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    // console.log('Effect running, making request to localhost:8080');

    // (async () => {
    //   try {
    //     const url = 'http://localhost:8080/api/hello';
    //     console.log('Fetching from:', url);

    //     const res = await fetch(url);
    //     console.log('Response status:', res.status);

    //     if (!res.ok) {
    //       throw new Error(`HTTP error! status: ${res.status}`);
    //     }

    //     const data = await res.json();
    //     console.log('Response data:', data);
    //   } catch (error) {
    //     console.error('Fetch error:', error);
    //   }
    // })();
  }, []);

  return (
    <>
      <img src="https://ts1.tc.mm.bing.net/th/id/R-C.987f582c510be58755c4933cda68d525?rik=C0D21hJDYvXosw&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1305%2f16%2fc4%2f20990657_1368686545122.jpg&ehk=netN2qzcCVS4ALUQfDOwxAwFcy41oxC%2b0xTFvOYy5ds%3d&risl=&pid=ImgRaw&r=0" />
    </>
  )
}

export default App
