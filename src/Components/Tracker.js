import React, { useEffect } from 'react';

export default function Tracker(){

    const getData = async () => {
        try {
            const response = await fetch('/data.json')
            const data = await response.json()
            console.log(data)
        } catch (err) {
            console.log(err)
        }
        
    }

    useEffect(() => {
        getData();
    }, [])

  return <div>

        </div>;
};

