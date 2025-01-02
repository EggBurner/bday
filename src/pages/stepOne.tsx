import Confetti from "react-confetti"
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function StepOne() {

    const navigate = useNavigate()

    const [confetti, setConfetti] = useState(false)

    const confettiToggle = () => {
      setConfetti(true);
      setTimeout(() => {
          setConfetti(false);
      }, 8000);
      setTimeout(() => {
        navigate('/stepTwo')
        
    }, 4000);
    }


    return(
        <main className="stepOne-main">
            <div>           
                Well I really wanted to get you a real present, but I know the problems. But you know what?
            </div>
            <div>
                FUCK THAT
            </div>
            <div>
                Its your birthday, Wohoo
            </div>
            <button onClick={confettiToggle} className='confetti-button'>NEXT</button>
            <div>
                (I'm not stopping my cursing. Cry about it.)
            </div>
            {confetti && <Confetti numberOfPieces={500}/>}
        </main>
    )
}