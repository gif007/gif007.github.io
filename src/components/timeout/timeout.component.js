import React, { useEffect, useState } from 'react';

import {

} from './timeout.styles';


const Timeout = () => {

    const dateNow = new Date();

    const dateLater = new Date(
            dateNow.getFullYear(),
            dateNow.getMonth(),
            dateNow.getDay(),
            dateNow.getHours() + 12,
            dateNow.getMinutes(),
            dateNow.getSeconds()
        );

    const initialDelta = Math.abs(dateNow - dateLater);
    const [delta, setDelta] = useState(initialDelta);

    const msToTime = (duration) => {
        let seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
      
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
      
        return {hours, minutes, seconds};
      }

    useEffect(() => {
        setTimeout(() => {
            setDelta(delta - 1000);
        }, 1000);
    })

    return (
        <div style={{color: 'white', fontWeight: 700, margin: '0 24px', fontSize: '24px'}}>
            <span>{msToTime(delta).hours}:</span>
            <span>{msToTime(delta).minutes}:</span>
            <span>{msToTime(delta).seconds}</span>
        </div>
    );
}

export default Timeout;