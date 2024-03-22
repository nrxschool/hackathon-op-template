"use client";
import React, { useState, useEffect } from 'react';
import api from '../lib/api'
import { useSDK } from "@metamask/sdk-react";
import MileDetail from '../components/mile-detail/mile-detail';

const Miles = () => {
    const [miles, setMiles] = useState([])
    const [address, setAddress] = useState('')
    const { sdk, connected, connecting, account } = useSDK();


    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(account)
                const response = await api.get(`/v1/miles?ownerAddress=${account}`);
                console.log(response)
                const data = await response.data
                setMiles(data);
            } catch (error) {
                console.error('Error fetching server data:', error);
            }
        };
        fetchData();
    }, [])

    return <>
        <main className="flex min-h-screen flex-col items-center justify-between p-24 left-div font-poppin" style={{justifyContent: 'flex-start'}}>
            {miles.length !== 1 && <div><span className="title1">Você tem </span><span className='title2'>{miles.length} miles ativas!</span></div>}
            {miles.length === 1 && <div><span className="title1">Você tem </span><span className='title2'>{miles.length} mile ativa!</span></div>}
            <div style={{display: 'flex'}}>
            {miles && miles.map((mile, index) => (
                <MileDetail key={index} mile={mile} />
            ))}
            </div>
        </main>
    </>
}

export default Miles