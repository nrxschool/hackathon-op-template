import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [candidates, setCandidates] = useState([
    { id: 1, name: 'Candidato 1', votes: 0, photo:'/img/candidato1.jpg'},
    { id: 2, name: 'Candidato 2', votes: 0, photo:'/img/candidato2.jpg'}
  ]);
  const voteCandidate = (candidateId: number) => {
    setCandidates(prevCandidates =>
      prevCandidates.map(candidate =>
        candidate.id === candidateId ? { ...candidate, votes: candidate.votes + 1 } : candidate
      )
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.background}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
        <defs>
         <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
         <stop offset="0%" stop-color="#9400D3" />
         <stop offset="25%" stop-color="#4B0082" />
         <stop offset="50%" stop-color="#0000FF" />
         <stop offset="75%" stop-color="#00FF00" />
         <stop offset="100%" stop-color="#FFFF00" />
         </linearGradient>
         </defs>
        <rect width="100%" height="100%" fill="url(#backgroundGradient)" />
      </svg>
      </div>
      <Head>
        <title>Global DVN</title>
        <meta content="Teste de votação" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className={styles.main}>
      <header>
      <h1 className={styles.title}> Votação Eleitoral </h1>
      <nav className={styles.menu}>
      <ul>
        <li>
          <Link href="/">
            What
          </Link>
        </li>
        <li>
          <Link href="/roadmap">
            Roadmap
          </Link>
        </li>
        <li>
          <Link href="/teams">
            Teams
          </Link>
        </li>
        <li>
          <Link href="/partners">
            Partners
          </Link>
        </li>
      </ul>
    </nav>
      <div className={styles.connectButton}><ConnectButton /></div>
      </header>
        <div className={styles.grid}>
          {candidates.map(candidate => (
            <div key={candidate.id} className={styles.card}>
              <Image src={candidate.photo} alt={candidate.name} width={200} height={200} />
              <div className={styles.details}>
              <h3 className={styles.h3}>{candidate.name}</h3>
              <p className={styles.p}>Votos: {candidate.votes}</p>
              <button className={styles.voteButton} onClick={() => voteCandidate(candidate.id)}>Votar</button>
            </div>
            </div>
          ))}
        </div>
        
      </main>

      <footer className={styles.footer}>
        <a href="" rel="" target="_blank">
          Global DVN ©
        </a>
      </footer>
    </div>
  );
};

export default Home;