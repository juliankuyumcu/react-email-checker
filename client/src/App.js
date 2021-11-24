import './App.css';
import logo from './logo.svg'; 
import React, {useState} from 'react';
import axios from 'axios';

function App() {

  const [email, setEmail] =  useState('');
  const [res, setRes] = useState('');
  
  function updateEmail(event) {
    setEmail(event.target.value);
  };

  function submitEmail() {
    if(!email){
      setRes(<div class='response'>Please enter an email.</div>);
    } else {
      axios.post("/api/emailCheck", {
        "email": email
      }).then((res) => {
        setRes('');
        if(res.data === "valid")
          setRes(<div class='good response'>That email is {res.data}!</div>);
        else if (res.data === "invalid")
          setRes(<div class='bad response'>That email is {res.data}!</div>);
        else
          setRes(<div class='response'>API Error</div>);
      });
    }
  };

  return (
    <div class="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div class="Content">
        <h1>React Email Checker</h1>
        <div class="form">
          <input id="email" type="text" placeholder="Email" onChange={updateEmail}/>
          <button id="submitEmail" type="button" onClick={submitEmail}>Submit</button>
        </div>
        {res}
      </div>
    </div>
  );
}

export default App;
