import './App.css'

function App() {

  return (
    <>
    <h1 className='calculator-title'>Let's count!</h1>
    <div className="calculator">
    <div className="display" id="display">0</div>
    <div className="buttons">
      <button className="number">7</button>
      <button className="number">8</button>
      <button className="number">9</button>
      <button className="operator">/</button>

      <button className="number">4</button>
      <button className="number">5</button>
      <button className="number">6</button>
      <button className="operator">x</button>

      <button className="number">1</button>
      <button className="number">2</button>
      <button className="number">3</button>
      <button className="operator">+</button>

      <button className="number">0</button>
      <button className="number">.</button>
      <button className="equals">=</button>
      <button className="operator">-</button>
    </div>
  </div>
    </>
  )
}

export default App
