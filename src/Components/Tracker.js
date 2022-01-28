import React, { useState, useEffect } from 'react';

export default function Tracker(){

    const [data, setData] = useState([])

    const getData = async () => {
        const url = 'https://api.covid19india.org/data.json'
        try {
            const response = await fetch(url)
            const data = await response.json()
            setData(data.statewise[0])
        } catch (err) {
            console.log(err)
        }
        
    }

    useEffect(() => {
        getData();
    }, [])

  return <div>
            <h2>🔴 LIVE</h2>
            <h2>COVID-19 TRACKER</h2>

            <ul>
                <li className="card">
                    <div className="card_main">
                        <p className="card_name">COUNTRY</p>
                        <p className="card_name card_small">{data.active}</p>
                    </div>
                </li>
            </ul>
        </div>;
};

