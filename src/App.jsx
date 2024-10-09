import { useState, useEffect } from 'react'
import './App.scss'
import axios from "axios"

function App() 
{
  const [advice, setAdvice] = useState([])

  let fetchData = async() =>
  {
    try
    {
      let resp = await axios.get('https://api.adviceslip.com/advice');
      let data = await resp.data.slip;
      
      console.log(data);
      return data;
    }
    catch(error)
    {
      console.log(error);
    }
  }

  const handleClick = async () =>
  {
    const res = await fetchData();
    setAdvice(res);
    console.log('this is advice');
    console.log(advice);
  }

  // useEffect(() =>
  // {
  //   fetchData();
  // }, [])

  return (
    <>
      <div className="container">
        <div className="card">
          <p className="card-heading">Advice #{advice.id}</p>
          <h3 className="card-text">{`"${advice.advice}"`}</h3>
          <img src="/images/pattern-divider-desktop.svg" alt="" className="card-divider" />
          <div className="card-btn" onClick={handleClick}>
            <img src="/images/icon-dice.svg" alt="" />
          </div>
        </div>
        {/* <h2>{advice}</h2> */}
        
      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  )
}

export default App
