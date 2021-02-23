import React, { useEffect, useState } from 'react';
import CityCard from '../CityCard/CityCard';

const CitiesList = () => {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => { 
            await fetch('http://localhost:61365/api/cities')
            .then(res => res.json())
            .then(result => setData(result))
        }
        fetchData();
    }, []);
    if(!data){
        return <div>No data</div>
    }
    return <div >
        <h1 style={{fontWeight: '300', textAlign: 'left'}}>
          Cities
        </h1>
        <div style={{display: 'flex', position: 'relative', flexWrap: 'wrap', justifyContent: 'center', position: 'relative'}}>
        {data.map(city => {
            console.log(city)
           return <CityCard id={city.id} name={city.name} photo={city.photo} city/>
        })}

        {/* {[1,2,3,4,5].map(city => {
            return <CityCard id={city} name={city} photo={city}/>
        })} */}
        </div>
    </div>
}

export default CitiesList;