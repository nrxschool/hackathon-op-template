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
        <main className="flex min-h-screen flex-col items-center justify-between p-24 centralized-div font-poppin" style={{alignItems: 'flex-start'}}>
            <span className="title">Uma Mile distante</span>
            <span className="title2">para atingir seu propósito</span>
            <span className="subtitle font-inter">Acompanhe sua mile e atinja a sua próxima meta</span>
            <div style={{display: 'flex', width: '40%', justifyContent: 'space-between'}}>
                <InputText  onChange={(value) => handleChange(value)} value={address} width={400}/>
                <Link href={`/miles/${address}`}> <button className='primary-button'>Consultar</button></Link>
            </div>
            <div className="footer-home">
                <img src="/img/flag.png" alt="Descrição da imagem" />
            </div>
        </main>
    </>
}

export default SearchMile