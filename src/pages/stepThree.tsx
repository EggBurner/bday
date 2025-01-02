import Confetti from "react-confetti"
import {useState} from 'react'

export default function StepThree() {


    const [confetti, setConfetti] = useState(false)

    const confettiToggle = () => {
      setConfetti(true);
      setTimeout(() => {
          setConfetti(false);
      }, 8000);
      setTimeout(() => {
        window.location.href = 'https://birthday.mewtru.com/HVzc3NKa'
        
    }, 4000);
    }


    return(
        <main className="stepTwo-main">
            <div>
                But seriously, I really really hope that you have an amazing year.
            </div>
            <div>
                Its the start of the year and its your birthday. I hope it's worth it. You don't face any difficulties and by the end of it, you have zero regrets.
            </div>
            <div>
                God speed my friend. Enjoy!
            </div>
            <div className="step3-gl">
                GOOD LUCK
            </div>
            <button onClick={confettiToggle} className='confetti-button'>NEXT</button>
            {confetti && <Confetti numberOfPieces={500}/>}
        </main>
    )
}