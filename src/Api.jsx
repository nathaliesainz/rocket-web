import { useState, useEffect } from "react";

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

return (
    <>
    {capsules.map(capsule => (
        <div 
            className="divRocket"
            key={capsule.capsule_id}> 

            {capsule.capsule_serial} 
            {capsule.details} 
            
        </div>
    ))}
    </>
)
};

export default Capsules;