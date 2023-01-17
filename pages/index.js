import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter(); //initializing the useRouter import above

  const  [formData, setFormData] = useState({
    firstName: '',
    username: ''
  }) // creating a const variable to store input data for use on later pages

  const CheckLogin = () => {
    console.log(formData.firstName);
    console.log(formData);

    if(formData.username !== null) {
      router.push({
        pathname: './counter',
        query: {
          username: formData.username
        }
      }) //router.push is used to traverse pages in next.js
    }
  }

  return (
    <>
      <Head>
        <title>RUTT Counter</title>
        <meta name="description" content="RUTT COUNTER" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.main_container}>
          <img width="300" src="/logo.png" />
          <input
            className={styles.input_first_name}
            type="text"
            id="first" 
            name="first"
            pattern="[A-Z]{1}[a-z]{2,10}"
            title="The first letter should be uppercase"
            placeholder="First Name"
            onChange={(e => setFormData({...formData, firstName: e.target.value}))}
          />
          <input
            className={styles.input_username}
            type="text"
            id="username" 
            name="username"
            required
            minLength="5"
            maxLength="10"
            placeholder="Username"
            onChange={(e => setFormData({...formData, username: e.target.value}))}
          />
          <button type="submit" className={styles.form_button} onClick={() => CheckLogin()}>Submit</button>
        </div>
      </main>
    </>
  )
}
