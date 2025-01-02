import Confetti from "react-confetti"
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import cat from '../assets/cat.gif'

export default function StepTwo() {

    const navigate = useNavigate()

    const [confetti, setConfetti] = useState(false)

    const confettiToggle = () => {
      setConfetti(true);
      setTimeout(() => {
          setConfetti(false);
      }, 8000);
      setTimeout(() => {
        navigate('/stepThree')
        
    }, 4000);
    }


    return(
        <main className="stepTwo-main">
            <div>
                Okay, so dont actually start crying, its your birthday after all. Be happy, smile, and curse like me cuz its getting a bit too cold for comfort
            </div>
            <div>
                This message is getting a bit dry so lemme put a funny gif or smth, smh
            </div>
            <div>
                Wtf man, if i try to search 'funny gifs' on google, everthing that comes up is soo
            </div>
            <div>
                CRINGE
            </div>
            <img src={cat} width={"200px"} />
            <button onClick={confettiToggle} className='confetti-button'>NEXT</button>
            {confetti && <Confetti numberOfPieces={500}/>}
        </main>
    )
}