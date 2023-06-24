import HeaderRocket from './assets/rocket.svg'
import ActiveRocket from './assets/rocketActive.svg'
import DestroyedRocket from './assets/rocketDeactivate.svg'
import UnknownRocket from './assets/rocketUnknown.svg'
import './App.css'
import Capsules from './Api'

function App() {
  return (
    <>
      <container>
            <header>
                <div>
                  <img src={HeaderRocket} className='HeaderRocket' alt="Rocket Logo" />
                </div>
                <div className='boxTitles'>
                  <p className='mainTitle'>Rocket</p>
                  <p className='subtitle'>Improving all the time</p>
                  <a href="#" className='btnStart'>Start</a>
                </div>
            </header>

            <div>
            <h2>Capsules status:</h2>
            <div className='rocketStatus'>

                <div className='activeRockets'>
                  <span>Active</span>
                  <img src={ActiveRocket} alt="Active Rockets" />
                </div>

                <div className='destroyedRockets'>
                  <span>Destroyed</span>
                  <img src={DestroyedRocket} alt="Destroyed Rockets" />
                </div>

                <div className='unknownRockets'>
                  <span>Unknown</span>
                  <img src={UnknownRocket} alt="Unknown Rockets" />
                </div>

            </div>

            <h2>All capsules:</h2>

            <Capsules />
            
            </div>

            <footer className='footer'>
              FIX YOUR LITTLE PROBLEM AND LIGHT THIS CANDLE.
            </footer>
        </container>
    </>
  )
}

export default App
