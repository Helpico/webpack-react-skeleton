import './styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import image from './images/floating.svg'

const couple = 'John & Marry'

function App() {
    return (
      <div>
        <h1>Hello, {couple}</h1>
        <div>
          <img width="70%" src={image} />
        </div>
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app') )


if (module.hot) module.hot.accept()