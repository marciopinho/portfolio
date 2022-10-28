import {useRef} from 'react';
import {makeRain} from '../rain'

export default function Rain() {

    const ref = useRef();

    makeRain(ref)
      
    return (

        <>
            <h1>Rain</h1>
            <div ref={ref}>Creact anvas not supported.</div>
        </>
        
    )
}