import '../App.css'
import Confetti from "react-confetti"
import {useState} from 'react'

import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    const [confetti, setConfetti] = useState(false)

    const confettiToggle = () => {
      setConfetti(true);
      setTimeout(() => {
          setConfetti(false);
      }, 8000);
      setTimeout(() => {
        navigate('/stepOne')
        
    }, 4000);
    }

  return (
    <main>
      <h1 className='main-heading'>
          HAPPY BIRTHDAY AIMAN!!!
      </h1>
      <div className='confetti-button-div'>
        <button onClick={confettiToggle} className='confetti-button'>CELEBRATE</button>
      </div>
      <div className='fun-1'>
        <p>Happy birthday my little potato. YOU turned 18? Are you serious!!</p>
        <p>Definitely not glad you are closer to dying than ever before</p>
      </div>


      {confetti && <Confetti numberOfPieces={500}/>}
    </main>
  )
}

export default Home
