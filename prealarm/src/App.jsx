import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyComponent from './MyComponent.jsx'
import jsonOutput from '../public/output.json'
import Alerts from './Alerts'
import Footer from './Footer'

function App() {
  
  const [complexity, setComplexity] = useState(jsonOutput)


// Dinamic creatic of react components based on array of objets

const complexityElements = complexity.map(complexItem => (
  <Alerts key={complexItem.complexity} name={complexItem.ticker.replace(".out", "")} complexities={parseInt(complexItem.complexity)} />
))



  return (
    <div className="App">

      <MyComponent/>

      <div className="Alerts--title">Today's Complexity Alerts</div>

      <div className="complexityElements--container">
        {complexityElements}
      </div>

      <div className="sample--container">
          <div className="sample1">No alert</div>
          <div className="sample2">Low alert</div>
          <div className="sample3">High alert</div>
      </div>

      <Footer/>

      </div>
  )
}

export default App
