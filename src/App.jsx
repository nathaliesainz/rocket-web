import HeaderRocket from './assets/rocket.svg'
import './App.css'

function App() {
  return (
    <>
      <container>
            <header>
                <div>
                  <img src={HeaderRocket} className='HeaderRocket' alt="Rocket Logo" />
                </div>
                <div className='boxLine'>
                  <p className='mainLine'>Rocket</p>
                  <p className='subLine'>Improving all the time</p>
                  <a href="#">Start</a>
                </div>
            </header>

            <div>
            <h2>Capsules status:</h2>
            <h2>All capsules:</h2>
            </div>

            <footer>
              <p>FIX YOUR LITTLE PROBLEM AND LIGHT THIS CANDLE.</p>
            </footer>
        </container>
    </>
  )
}

export default App
