import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Share = () => {
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [error, setError] = useState('');
  const urlRef = useRef(null);
  const { id } = useParams();
//   const [isOpen, setIsOpen] = useState(false);

const currentUrl = window.location.href;
const parentUrl = currentUrl.split('/').slice(0, 3).join('/');
const myUrl = `${parentUrl}/home/${id}`;
console.log(myUrl)



  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'https://spoo.me';
  
        // Replace these with your actual values
        const payload = {
        //   url: myUrl,
            url: myUrl, 
        };
  
        // Make the POST request using Axios
        const response = await axios.post(url, payload, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
          },
        });
  
        if (response.status === 200) {
          // If the request was successful, set the shortened URL
          const data = response.data;
          setShortenedUrl(data.short_url);
          setError('');
        } else {
          // If the request failed, set the error message
          setError(`Error: ${response.status}`);
          setShortenedUrl('');
        }
      } catch (error) {
        setError(`Error: ${error.message}`);
        setShortenedUrl('');
      }
    };
  
    fetchData();
  }, []); // Make sure to pass an empty dependency array to run this effect only once on component mount
  
  const handleCopy = () => {
    if (shortenedUrl) {
      navigator.clipboard.writeText(shortenedUrl)
        .then(() => {
          console.log('URL copied to clipboard');
        })
        .catch((error) => {
          console.error('Failed to copy URL: ', error);
        });
    }
  };

  const handleSendToWhatsApp = () => {
    if (shortenedUrl) {
      window.location.href = `whatsapp://send?text=${encodeURIComponent(shortenedUrl)}`;
    }
  };
  

  return (
    <div>
      {shortenedUrl && (
        <div>
          {/* Display the shortened URL */}
          {/* <p>Shortened URL: {shortenedUrl}</p> */}
          {/* Text input with the shortened URL to enable copying */}
          <input
                ref={urlRef}
                type="text"
                defaultValue={shortenedUrl}
                style={{ display: 'none' }}
                />
          {/* Button to copy the URL to the clipboard */}
          <div className='flex flex-col justify-center items-center gap-10'>
            <button onClick={handleCopy}>Copy to Clipboard</button>
            <button onClick={handleSendToWhatsApp}>Send to whatsapp</button>
          </div>
        </div>
      )}
      {/* Display error message if any */}
      <a href="https://www.buymeacoffee.com/=" className='!bottom-5 absolute'><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=p&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a>
    </div>
  );
};

export default Share;
