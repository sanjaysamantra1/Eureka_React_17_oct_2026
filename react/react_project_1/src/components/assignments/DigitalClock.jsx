import { useEffect, useState } from 'react'

export default function DigitalClock() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString())
        }, 1000);
        return () => {
            clearInterval(timerId);
        }
    }, []);
    return <>
        <h2>Digital Clock</h2>
        <h3>{currentTime}</h3>
    </>
}
