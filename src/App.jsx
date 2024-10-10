import { useState, useEffect } from 'react'
import './App.scss'
import MediaQuery from 'react-responsive'
import axios from '../node_modules/axios/index'

function App() 
{
  const [advice, setAdvice] = useState([])

  const url = 'https://api.adviceslip.com/advice';

  let fetchData = async() =>
  {
    try
    {
      let resp = await axios.get(url);
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

  useEffect(() =>
  {
    fetchData();
  }, [])

  return (
    <>
      <div className="container">
        <div className="card">
          <p className="card-heading">Advice #{advice ? advice.id : "15"}</p>
          <h3 className="card-text">{advice ? `"${advice.advice}"` : "If it ain't broke don't fix it."}</h3>
          <MediaQuery minWidth={577}>
            <img src="/images/pattern-divider-desktop.svg" alt="card-divider" className="card-divider" />
          </MediaQuery>
          <MediaQuery maxWidth={576}>
            <img src="/images/pattern-divider-mobile.svg" alt="card-divider" className="card-divider" />
          </MediaQuery>
          <div className="card-btn" onClick={handleClick}>
            <img src="/images/icon-dice.svg" alt="card-btn" />
          </div>
        </div>
        {/* <h2>{advice}</h2> */}
        
      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://www.frontendmentor.io/profile/nmr15">Nathaniel Ravelo</a>.
      </div>
    </>
  )
}

export default App
