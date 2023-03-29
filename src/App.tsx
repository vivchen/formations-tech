import React, { useEffect } from 'react';
import './App.css';
import { SampleTable} from "./components/SampleTable";

function App() {

  useEffect(() => {
    fetch('/transactions', {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => console.log(data))
      .catch(error => console.error(error));
    }, []);

  return (
      <div className="App">
       <header className="App-header">
          Formations Take Home assignment
        </header>
       <SampleTable />
      </div>
  );
}

export default App;
