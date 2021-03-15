import { useSpring, animated } from 'react-spring'



import welcomeImg from "./welcome.jpg"
import "./welcome.css"

export default function Welcome() {

    const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1500 } })

    return (
        <>
            <div className="container-fluid welcome-container">
                <div className="row h-100">
                    <div className="col-12 h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-md-4 welcome-text-left">
                                <p className="big">
                                    Track your gains to gain your goal.
                            </p>
                                <p className="normal">
                                    <animated.div style={props}>
                                        Join the list of elite atheletes. Know how much to push yourself with Gain-X.
                                        Tracking your workout has never been more easier
                                    </animated.div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}