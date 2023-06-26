import { useState, useEffect } from "react";
import ActiveRocket from './assets/rocketActive.svg'
import DestroyedRocket from './assets/rocketDeactivate.svg'
import UnknownRocket from './assets/rocketUnknown.svg'

const Capsules = () => {
    const [capsules, setCapsules] = useState([]);

    useEffect(() => {
        const requestApi = async () => {
            try {
                const response = await fetch('https://api.spacexdata.com/v3/capsules');
                const data = await response.json();
                setCapsules(data);
            } catch (error) {
                console.log('Error:', error);
            }
        };

    requestApi();
}, []);


    const rocketImages = {
        active: ActiveRocket,
        retired: DestroyedRocket,
        destroyed: DestroyedRocket,
        unknown: UnknownRocket
    }


return (
    <>
    <div className='boxRockets'>
        {capsules.map(capsule => (
            <div 
                className="divRocket"
                key={capsule.capsule_id}>
                <h3>{capsule.capsule_serial}</h3>
                <img src={rocketImages[capsule.status]} className="imgCards" />
                <span>{capsule.details}</span>
                
            </div>
        ))}
        </div>
    </>
)
};

export default Capsules;