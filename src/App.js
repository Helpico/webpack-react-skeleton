import React from "react";
import image from './images/floating.svg'
import './styles/index.css'

function App() {

  const couple = 'John & Marry'

    return (
      <div>
        <h1>Hello, {couple}</h1>
        <div>
          <img width="70%" src={image} />
        </div>
      </div>
    )
}

export default App;