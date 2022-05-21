import rocketImg from './assets/rocket.png'

import Signup from './components/Signup'

const App = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7">
          <img src={rocketImg} alt="Rocket Img" className="img-fluid w-100" />
        </div>
      </div>
    </div>
  )
}

export default App
