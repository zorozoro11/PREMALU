import React,{useState} from 'react';
import { json, useNavigate } from 'react-router-dom';

const Landing = () => {

    const [formData, setFormData] = useState({
        name: '',
        location: '',
        time: ''
      });
    const navigate = useNavigate();

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

      const toHex = (data) => {
        const encoder = new TextEncoder();
        const encodedData = encoder.encode(JSON.stringify(data));
        return Array.prototype.map.call(encodedData, x => ('00' + x.toString(16)).slice(-2)).join('');
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        // Access form data
        console.log(formData);
        const appendData = toHex(JSON.stringify(formData))
        navigate('/share/'+appendData);
      };


  return (
    <div className="contact-us ">
      <form onSubmit={handleSubmit}>
        <input placeholder="His / Her Name" type="text" required name='name' 
        onChange={handleChange}/>
        <input placeholder="Location you need to meet" type="text" name="location" required 
          onChange={handleChange}/>
        <input placeholder='Time' type='text' name='time' required
          onChange={handleChange}/>
        <button type="submit">I'm damn sure </button>
      </form>
      <a href="https://www.buymeacoffee.com/p" className='!bottom-5 absolute'><img src="https://img" /></a>
    </div>
  ); 
};

export default Landing;
