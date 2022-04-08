import React, { useEffect, useState } from 'react';
import Cosmatic from '../cosmatic/Cosmatic';
import { getTotal } from '../utlity/Reducer';

const Cosmatics = () => {
    const [cosmatics, setCosmatics] = useState([]);

    useEffect(() => {
        fetch('data.json')//data from my own data sheet from public>data.json
        .then(res => res.json())
        .then(data => setCosmatics(data))
    },[])

    const total = getTotal(cosmatics);

    return (
        <div>
            <h2>money needed: {total}</h2>
            {
            cosmatics.map(cosmatic => <Cosmatic key={cosmatic.id}cosmatic = {cosmatic}></Cosmatic>)
            }
        </div>
    );
};

export default Cosmatics;