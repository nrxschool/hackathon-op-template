import Link from "next/link";

export default function Home() {
  return <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24 centralized-div font-poppin">
      <span className="title">Uma Milestone</span>
      <span className="title2">para atingir sua meta</span>
      <span className="subtitle font-inter">Crie sua vaquinha em minutos!</span>
      <div>
        <button className='outline-button'>Consulte sua mile</button>
        <Link href="/create-mile"> <button className='primary-button'>Crie sua mile!</button></Link>
      </div>
      <div className="footer-home">
        <img src="/img/flag.png" alt="Descrição da imagem"/>
      </div>
    </main>
  </>
}
