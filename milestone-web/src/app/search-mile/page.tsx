"use client"
import Link from "next/link"
import InputText from "../components/input-text/input-text"
import { useState } from "react"

const SearchMile = () => {
    const [address, setAddress] = useState('')

    const handleChange = (value: string) => {
        setAddress(value)
    }
    return <>
        <main className="flex min-h-screen flex-col items-center justify-between p-24 centralized-div font-poppin" style={{ alignItems: 'flex-start' }}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '60%'}}>
                    <span className="title" style={{fontSize: 80, marginBottom: -15}}>Uma Mile distante</span>
                    <span className="title2" style={{fontSize: 55}}>para atingir seu propósito</span>
                    <span className="subtitle font-inter" style={{fontSize: 30, fontWeight: 300, marginTop: -20, marginBottom: 30}}>Acompanhe sua mile e atinja a sua próxima meta</span>
                    <div style={{ display: 'flex', justifyContent: 'left' }}>
                        <InputText onChange={(value) => handleChange(value)} value={address} width={400} />
                        <Link href={`/miles/${address}`}> <button className='primary-button' style={{height: 54, marginLeft: 30, fontSize: 21}}>Consultar</button></Link>
                    </div>
                </div>
                <div>
                    <img src="/img/search-mile.png" width='80%' style={{float: 'right'}}/>
                </div>
            </div>
            <div className="footer-home">
                <img src="/img/flag.png" alt="Descrição da imagem" />
            </div>
        </main>
    </>
}

export default SearchMile