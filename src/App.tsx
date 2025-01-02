import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import StepOne from './pages/stepOne'
import StepTwo from './pages/stepTwo'
import StepThree from './pages/stepThree'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />}/>
      <Route path='/' element={<Home />}/>
      <Route path='/stepOne' element={<StepOne />} />
      <Route path='/stepTwo' element={<StepTwo />} />
      <Route path='/stepThree' element={<StepThree />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
