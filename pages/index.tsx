import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { ConnectButton} from "@rainbow-me/rainbowkit";
import { useAccount } from 'wagmi';
import { ethers } from 'ethers';

import tweet from "./data/tweet"
import tweetData from './data/type';
import { useEffect, useState } from 'react';
import contractAddress from "../const/address.json";
import abi from "../const/abi.json";
import { publicKey, privateKey} from "../const/paillier";
import { PublicKey, PrivateKey } from 'paillier-bigint';
import { setEnvironmentData } from 'worker_threads';

export default function Home() {
  const {isConnected} = useAccount();
  const [isConfirmed, setConfirmed] = useState<boolean>(false);
  const [priority, setPriority] = useState<number[]>([]);
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);

  const connectPage = (): JSX.Element => {
    return (
      <div className={styles.button}>
        <ConnectButton/>
      </div>
    )
  }

  useEffect(() =>{
    const getProvider = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum as any);
      await provider.send("eth_requestAccounts", []);
      setProvider(provider);
    }
    getProvider();
  },[isConnected]);

  const getPriority = async () => {
    let data:number[] =[];
    if(provider !== null){
      const encryptor = new PublicKey(publicKey.n, publicKey.g);
      const decryptor = new PrivateKey(privateKey.lambda, privateKey.mu, encryptor, privateKey._p, privateKey._q);
      const contract = new ethers.Contract(contractAddress.zkML, abi.abi, provider);
      try{
        console.log(contract);
        const addr = await provider.getSigner().getAddress();
        console.log(addr);
        
        for(let i=0; i<5;i++){
          const tx = await contract.userHistoryData(addr, i);
          data.push(Number(decryptor.decrypt(BigInt(tx))));
        }
        const indices = Array.from(Array(data.length).keys()).sort((a:number, b:number) => data[b] - data[a]);
        setPriority(indices);
      }catch(e){
        console.log(e);
      }
    }
    setConfirmed(true);;
  }

  const tweetListPage = (): JSX.Element => {
    return (
        <div className={styles.grid}>
          {priority.map((v)=>{
              return (
                <div className={styles.card}>
                  <p>
                    {tweet[v].content}
                  </p>
                </div>
              )
          })}
        </div>
    )
  }

  const confirmPage = (): JSX.Element =>{
    return (
      <div className={styles.grid}>
        <p>
          We use your browsing history of web3 youtube and optimize the web3 twitter contents for you.
        </p>
        <button onClick={getPriority} className={styles.button2}>
          Are you confirm?
        </button>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Web3 Twitter</title>
        <meta name="description" content="Tokyo Web3 Hackathon Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='styels.main'> 
        <h1 className={styles.title}>
          Web3 Twitter
        </h1>
        {!isConnected ? connectPage() : (!isConfirmed ? confirmPage() : tweetListPage())}
      </main>
      
      <footer className={styles.footer}>
        @CopyRight....
      </footer>
    </div>
  )
}
