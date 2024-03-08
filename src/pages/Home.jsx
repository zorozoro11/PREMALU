import React, { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

function Landing() {
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 200, y: 200 }); // Initial position of "No" button
    const [noPos, setNoPos] = useState(false);
    const { id } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    let [data,setData] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        // Extract the encoded data from the URL
        // Convert the hexadecimal data back to its original form
        const decodedData = JSON.parse(hexToAscii(id));
        
        setData(JSON.parse(decodedData))
        decodedData && console.log(data)
      }, []);
    
      // Function to convert hexadecimal to ASCII
      const hexToAscii = (hex) => {
        const bytes = [];
        for (let i = 0; i < hex.length; i += 2) {
          bytes.push(parseInt(hex.substr(i, 2), 16));
        }
        return new TextDecoder().decode(new Uint8Array(bytes));
      };

    

    const handleNoClick = () => {
        // Randomly generate new x and y coordinates within the screen bounds
        setNoPos(true)
        const newX = Math.random() * (window.innerWidth - 100); // Adjust 100 based on button width
        const newY = Math.random() * (window.innerHeight - 100); // Adjust 100 based on button height
        setNoButtonPosition({ x: newX, y: newY });
    };
    const handleYesClick = () => { 
        setIsOpen(true)
    }

    return (
    <React.Fragment>
       {!isOpen ? ( <div className="flex justify-center items-center h-screen ">
            <div className="text-center flex items-center flex-col">
                <h1 className="text-4xl font-bold text-red-500 drop-shadow-md font-serif italic heading">Wanna go out with me , {data?.name} ? </h1>
                <div className='pt-16'>
                    <div className="heart1 drop-shadow-md"></div>
                </div>
                <div className='pt-10 gap-9 flex'>
                    <button className='px-14 py-3 bg-red-700 rounded-lg text-white' onClick={handleYesClick}>Yes</button>
                    {noPos ? (
                        <button
                            className='px-14 py-3 border-white border-2 rounded-lg text-white'
                            style={{ position: 'absolute', left: noButtonPosition.x, top: noButtonPosition.y }}
                            onClick={handleNoClick}
                        >
                            No
                        </button>
                    ) : (
                        <button
                            className='px-14 py-3 border-white border-2 rounded-lg text-white'
                            onClick={handleNoClick}
                        >
                            No
                        </button>
                    )}
                </div>
                {/* <a href="https://www.buymeacoffee.com/" className='!bottom-5 absolute'><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=dheerajdileep&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a> */}
            </div>
        </div> ) : (
                <div className="flex justify-center items-center flex-col  h-screen">
                         <div className="container">
                            <div className="valentines ">
                                <div className="envelope">
                                <div className="card customFont" style={{ fontSize: '14px' }} data-content={`Lakshmi, lets go ${data.location} at ${data.time} ❤️`}>
                                        <div className="text">
                                            
                                        </div>
                                        <div className="heart"></div>
                                    </div>
                                </div>
                                <div className="front mx-auto"></div>
                            </div>
                        </div>
                         
                        {/* <a href="https://www.buymeacoffee.com/" className='!bottom-5  absolute'><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=dheerajdileep&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a> */}
                    </div>
            )
        }
        </React.Fragment>
    );
}

export default Landing;
